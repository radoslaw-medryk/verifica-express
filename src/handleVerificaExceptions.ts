import { VerificaException } from "verifica";
import { ErrorRequestHandler } from "express";

export function handleVerificaExceptions(): ErrorRequestHandler {
    return function _handleVerificaExceptions(err, req, res, next) {
        if (err instanceof VerificaException) {
            res.status(400).send({
                type: "validation",
                errors: err.errors,
            });
            return;
        }

        next(err);
    };
}
