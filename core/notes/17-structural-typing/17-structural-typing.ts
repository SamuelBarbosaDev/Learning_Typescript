type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string};

const verifyUser: VerifyUserFn = (user, sentValue) => {
    return (
        user.username === sentValue.username && user.password === sentValue.password
    );
};

const bdUser = { username: 'Léon', password: '42' };
const sentUser = { username: 'Léon', password: '42', permissions: '' };
const loggedIn = verifyUser(bdUser, sentUser);