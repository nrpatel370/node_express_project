//@desc Get all contacts
//@route GET api/contacts
//@access public

const getContact = (req,res)=>{
    res.status(200).json({message: "Get all contacts"});
};

const getIndContact = (req,res)=>{
    res.status(200).json({message: `Get contact for ${req.params.id}`});
};

const createContact = (req,res)=>{
    console.log(req.body);
    const{name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({message: "Create Contact"});
};

const updateContact = (req,res)=>{
    res.status(200).json({message: `Update ${req.params.id}`});
};

const deleteContact = (req,res)=>{
    res.status(200).json({message: `Delete ${req.params.id}`});
};



module.exports = {getContact, createContact, updateContact, deleteContact, getIndContact};