import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap'

const CreateUserForm = ({addUserForm}) => {
    const [formData, setFormData] = useState({
        name : '',
        email : '',
        salary: '',
        phone : '',
        errors : {}
    })

    const handleChange = event => {
        setFormData(prevState => ({
            ...prevState,
            [event.target.name] : event.target.value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(formData)
        const {isValidate, errors} = validate()
        if(isValidate){
            const {name, email, phone, salary } = formData
            const user = {
                name,
                email,
                phone,
                salary
            }
           addUserForm(user) ;
           event.target.reset();
           setFormData({
                name : '',
                email : '',
                salary: '',
                phone : '',
                errors : {}
     })
        }
     else{
       setFormData({errors})
     }
    }
    const validate = () => {
        const errors = {};
        const {name, email, phone, salary } = formData
        if(!name){
            errors.name = "please enter name"
        }else if(name.length > 20){
            errors.name = "Too Long"
        }
        if(!email){
            errors.email = "Please enter email"
        }
        if(!phone){
            errors.phone = "please enter Phone"
        }
        if(!salary){
            errors.salary = "Please enter salary"
        }

        const isValidate = Object.keys(errors).length === 0 ? true : false;
        return {
            isValidate,
            errors
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Enter Name: </Label>
                <Input name='name' value={formData.name} placeholder='Please type name' onChange={handleChange} invalid={formData.errors.name ? true: false}/>
                 {formData.errors.name && <FormFeedback>{formData.errors.name}</FormFeedback>}
            </FormGroup>
            <FormGroup>
                <Label>Enter Email: </Label>
                <Input type='email' name='email' value={formData.email} placeholder='Please type email' onChange={handleChange} invalid={formData.errors.email ? true: false}/>
                {formData.errors.email && <FormFeedback>{formData.errors.email}</FormFeedback>}
            </FormGroup>
            <FormGroup>
                <Label>Enter Salary: </Label>
                <Input type='number' name='salary' value={formData.salary} placeholder='Please type Salary' onChange={handleChange} invalid={formData.errors.salary ? true: false}/>
                {formData.errors.salary && <FormFeedback>{formData.errors.salary}</FormFeedback>}
            </FormGroup>
            <FormGroup>
                <Label>Enter Phone: </Label>
                <Input  name='phone' value={formData.phone} placeholder='Please type phone' onChange={handleChange} invalid={formData.errors.phone ? true: false}/>
                {formData.errors.phone && <FormFeedback>{formData.errors.phone}</FormFeedback>}
            </FormGroup>
            <Button color="green" type='submit'>Submit</Button>
        </Form>
    );
};

export default CreateUserForm;