class Contoller {
    static async register(req, res){
        try {
           res.send("regissssssssssss") 
        } catch (error) {
            console.log(error, ">> regis controller");
            
        }
    }
}

module.exports = Contoller;