
const mongoose= require("mongoose");


const userSchema=new mongoose.Schema({
    name:{type:"string",required:"true"},
    email:{type:"string",required:"true",unique:"true"},
    password:{type:"string",required:"true"},
    profile_photo_url:{type:"string",required:"true"},
    roles:[{type:String , required:"true"}]
},{
    versionKey:false,
    timestamps: true
});

const User=mongoose.model("user",userSchema);


const movieSchema=new mongoose.Schema({
    name: {type:"string",required:"true"},
    actors:[{type:String,required:"true"}],
    languages: [{type:String ,required:"true"}],
    directors:[{type:String,required:"true"}],
    poster_url:{type:"string",required:"true"}
},{
    versionKey:false,
    timestamps: true
});



const movie=mongoose.model('movie',movieSchema);


const theatreSchema= new mongoose.Schema({
    name:{type:"string",required:"true"},
    location:{type:"string",required:"true"}
})

const theatre=mongoose.model('theatre',theatreSchema);


const screenSchema=new mongoose.Schema({
    name:{type:"string",required:"true"},
    theatre_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"theatre",
        required:true
    }
},
{versionKey:false,
timestamps: true
});

const screen=mongoose.model('screen',screenSchema);


const showSchema=new mongoose.Schema({
    timimg:{type:"string",required:"true"},
    movie_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"show",
        required:true
    },
    total_seats:{type:Number,required:"true"},
    screen_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"screen",
        required:true

    }
},{
    versionKey:false,
    timestamps: true
});


const show= mongoose.model("show",showSchema);



const seatSchema = new mongoose.Schema({
    show_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"show",
        required:true
    }
},{
    versionKey:false,
    timestamps: true
});


const seat= mongoose.model("seat",seatSchema);




module.exports ={User,movie,theatre,screen,show,seat};