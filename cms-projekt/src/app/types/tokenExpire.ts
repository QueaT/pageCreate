
export class TokenExpireTime{
    constructor(private _tokenCreated:Date){
    }
    checkIfTokenIsValid(){
        const today = new Date();
        const tokenTime = new Date(this._tokenCreated);
        let tokenHours = +today - +tokenTime
        tokenHours/=1000;
        tokenHours/=60;
        const minutes = 30 - Math.round(tokenHours);
        if(minutes < 31) return minutes;
        else return false;
        
    }
}