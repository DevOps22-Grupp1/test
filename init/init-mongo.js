db.createUser({
    user: "sudo_admin",
    pwd: "password",
    roles: [
        {
            role: "readWrite",

            db: "allUsers",
        },
    ],
});

db.createCollection("users");

