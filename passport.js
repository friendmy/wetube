import passport from "passport";
import GithubStrategy from "passport-github";
import FaceBookStrategy from "passport-facebook";
import User from "./models/User";
import { githubLoginCallback } from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(
	new GithubStrategy(
		{
			clientID: process.env.GH_ID,
			clientSecret: process.env.GH_SECRET,
			callbackURL: `http://localhost:4000${routes.githubCallback}`
		},
		githubLoginCallback
	)
);

passport.use(
	new FaceBookStrategy{
		clientID: FB_ID,
		clientSecret: FB_SECRET,
		callbackURL = `http://localhost:4000${routes.facebookCallback}`

});

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
