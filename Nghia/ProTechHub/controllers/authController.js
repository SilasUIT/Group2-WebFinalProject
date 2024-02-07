import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";

// Register || POST
export const registerController = async (req,res) => {
    try {
        const {name, email, password, phone, address} = req.body;

        // Validation
        if(!name) {
            return res.send({message: "Name is required"});
        }
        if(!email) {
            return res.send({message: "Email is required"});
        }
        if(!password) {
            return res.send({message: "Password is required"});
        }
        if(!phone) {
            return res.send({message: "Phone number is required"});
        }
        if(!address) {
            return res.send({message: "Address is required"});
        }

        // Check user
        const existingUser = await userModel.findOne({email})

        // Existing User
        if(existingUser) {
            return res.status(200).send({
                sucess: false,
                message: 'Already Register please login',
            })
        }

        // Register User
        const hashedPassword = await hashPassword(password);

        // Save
        const user = await new userModel({
            name, 
            email, 
            phone, 
            address, 
            password:hashedPassword
        }).save();
        
        res.status(201).send({
            success: true,
            message: 'User Registeration Successfull',
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send( {
            success: false,
            message: 'Error in Registeration',
            error
        })
    }
};

// Login || POST
export const loginController = async (req,res) => {
    try {
        const {email, password} = req.body;

        // Validation
        if(!email || !password) {
            return res.send({
                success: false,
                message: "Invalid email or password"
            });
        }

        // Check user
        const user = await userModel.findOne({email});

        if(!user) {
            return res.status(404).send({
                sucess: false,
                email: 'Email is not registered'
            });
        }

        const match = await comparePassword(password, user.password);

       if(!match) {
        return res.status(200).send({
            success: false,
            message: 'Invalid Password'
        })
       }

       // Token
       const token = await JWT.sign({_id: user._id}, process.env.JWT_SECRET, {
        expiresIn: '7d'
    });

    res.status(200).send({
        cusses: true,
        message: 'Login successfullly',
        user:{
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
        },
        token
    })

    } catch {
        console.log(error);
        res.status(500).send( {
            success: false,
            message: 'Error in Login',
            error
        })
    }
};

// Test || GET
export const testController = async (req,res) => {
    res.send("Protected Route");
}
