import { Request, Response , NextFunction } from "express";


export function euserAdmin(request: Request , response: Response, next: NextFunction){
  // verificar se o  user é adm
  const admin = true;

  if(admin){
    return next();
  }

  return response.status(401).json({
    error:"User not admin!",
  });
}