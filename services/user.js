const bcrypt = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");
const {
  ACCESS_SECRET_TOKEN,
  REFRESH_SECRET_TOKEN,
} = require("../config/index");

class UserService {
  userRepo;
  
  constructor(repo) {
    this.userRepo = repo;
  }
  
  async SignUp({firstname, lastname,sem, gradYear, branch, college, password, username}) {
    try {
      console.log(ACCESS_SECRET_TOKEN, "!!!!!!")
      console.log(ACCESS_SECRET_TOKEN);
      console.log(REFRESH_SECRET_TOKEN);
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);

      const data = await this.userRepo.CreateUser({
        firstname, lastname,sem, gradYear, branch, college, password: hashedPassword, username
      });

      if (data.success) {
        const user = data.user;
        const payload = {
          username,
          role: data.role,
          uid: data.data._id,
        };
        const accessToken = await sign(payload, ACCESS_SECRET_TOKEN, {
          expiresIn: "15s",
        });
        const refreshToken = await sign(payload, REFRESH_SECRET_TOKEN, {
          expiresIn: "1d",
        });
        this.userRepo.CreateRefreshToken(refreshToken, data.data._id);
        return {
          success: true,
          uid: data.data._id,
          tokens: { accessToken, refreshToken },
        };
      } else {
        return data;
      }
    } catch (e) {
      console.log("Error at user service layer", e);
      return { success: false, message: "server-error" };
    }
  }

  async SignIn({ authText, password }) {
    try {
      let data;
      if (authText.includes("@"))
        data = await this.userRepo.GetUserWithEmail(authText);
      else data = await this.userRepo.GetUserWithUsername(authText);
      console.log(data);
      if (!data.success) return data;
      const validPassword = await bcrypt.compare(password, data.user.password);
      if (!validPassword)
        return { success: false, message: "Enter the correct email/password" };
      const payload = {
        username: data.user.username,
        role: data.user.role,
        uid: data.user._id,
      };
      const accessToken = await sign(payload, ACCESS_SECRET_TOKEN, {
        expiresIn: "15s",
      });
      const refreshToken = await sign(payload, REFRESH_SECRET_TOKEN, {
        expiresIn: "1d",
      });
      this.userRepo.CreateRefreshToken(refreshToken, data.user._id);
      return { success: true, user: data.user, accessToken, refreshToken };
    } catch (e) {
      console.log("Error at user service layer", e);
      return { success: false, message: "server-error", error: e };
    }
  }

  async HandleUserLogout(uid, refreshToken) {
    try {
      const data = await this.userRepo.DeleteRefreshToken(uid);
      return data;
    } catch (e) {
      console.log("Error at user service layer", e);
      return { success: false, message: e };
    }
  }

  async GetRefreshToken(uid) {
    try {
      const data = await this.userRepo.GetRefreshTokenWithUID(uid);
      if (data.success)
        return { success: true, refreshToken: data.refreshToken };
      return data;
    } catch (e) {
      console.log("Error at the user Service layer", e);
      return { success: false, message: e };
    }
  }

  async RefreshAccessToken(refreshToken) {
    try {
      const data = await this.userRepo.FindRefreshTokenWithUserDetails(
        refreshToken
      );
      if (data.success) {
        const payload = await verify(refreshToken, REFRESH_SECRET_TOKEN);
        if (payload) {
          if (payload.username !== data.refreshToken.user.username)
            return { success: false, message: "invalid user" };

          //  payload = {payload.email, role: data.role, uid: data.data._id};
          const { username, role, uid } = payload;
          const accessToken = sign({ username, role, uid }, ACCESS_SECRET_TOKEN, {
            expiresIn: "15s",
          });
          return { success: true, accessToken, username, uid, role };
        }
      }
      return data;
    } catch (e) {
      console.log("Error at the user Service layer", e);
      return { success: false, error: e };
    }
  }

  async GetUsersCount() {
    try {
      const data = await this.userRepo.GetUsersCount();
      return data;
    } catch (e) {
      console.log("Error while getting user count", e);
      return { success: false, error: e };
    }
  }

  async GetAllUsers() {
    try {
      const data = await this.userRepo.GetAllUsers();
      return data;
    } catch (e) {
      console.log("Error while getting user count", e);
      return { success: false, error: e };
    }
  }

  async GetUserBasedOnInputText({ text }) {
    try {
      const data = await this.userRepo.GetUserBasedOnInputText({ text });
      return data;
    } catch (e) {
      console.log("Error at User Service Layer", e);
      return { success: false, error: e };
    }
  }

  async GetAllUsersPerformace() {
    try {
      const data = await this.userRepo.GetAllUsersPerformace();
      return data;
    } catch (e) {
      console.log("Error while GetAllUsersPerformace", e);
      return { success: false, error: e };
    }
  }

  async EditUserRole({ uid, role }) {
    try {
      const data = await this.userRepo.editUserRole({ uid, role });
      return data;
    } catch (e) {
      console.log("Error while editUserRole", e);
      return { success: false, error: e };
    }
  }

  async DeleteUser({ uid }) {
    try {
      const data = await this.userRepo.DeleteUser({ uid });
      return data;
    } catch (e) {
      console.log("Error while deleteUser", e);
      return { success: false, error: e };
    }
  }
}

module.exports = { UserService };
