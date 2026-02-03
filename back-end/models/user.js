class User{
    constructor(firstName, lastName, email, username, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    changePassword(newPassword) {
        this.password = newPassword;
    }

    changeUsername(newUsername) {
        this.username = newUsername;
    }
    
    getFirstName() {
        return `${this.firstName}`;
    }

}