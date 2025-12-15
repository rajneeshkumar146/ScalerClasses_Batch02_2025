## Hashing Password with Bcrypt.

# There are three general guidelines for security basis on which we design our backend.

    a. Zero Trust Model: "Never Trust, Always Verify.
        i. Assume that no one (neither inside nor outside the
        network) is trustworthy. This means always verifying
        the authenticity of users, services, and systems
        before granting access to resources.

        ii. Implement strong authentication mechanisms,
        validate and sanitize all inputs, and regularly audit
        logs and activities.


    b. Principle of Least Privilege: "Minimal Access for Maximum
       Security”

        i. Each user, program, or system should have the least
        amount of privilege necessary to perform its function.
        This limits the potential damage in case of a security
        breach.


    c. Reduce Attack Surface: "Minimize Risk by Minimizing
       Exposure"
       
        i. The attack surface refers to the total number of
        points (like software, services, and ports) where an
        unauthorized user can try to enter data or extract data
        from the environment. Reducing the attack surface
        minimizes the potential entry points for attackers.


## Anatomy of the generated hash
Stored Hash Contains the Salt: When bcrypt hashes a password, it incorporates the salt into the resulting hash. This means the hash stored in your database contains both the hashed password and the salt used. The format typically includes the salt, the cost factor (or salt rounds), and the hashed password.
When a user attempts to log in, the system:

    - Retrieves the stored bcrypt hash.
    - Extracts the version, cost factor, and salt from the stored hash.
    - Hashes the provided password with the extracted salt and cost factor.
    - Compares the newly generated hash with the stored hash.