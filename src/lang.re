/* Learning GADT ! */
/* language */
/*   operators: if, = , < */
/*   types: int & boolean */

type value = | VBool of bool | VInt of int;

type expr = | Evalue of value | If of (expr, expr, expr) | Eq of (expr, expr);

let rec eval: expr => value =
  fun expr =>
    switch expr {
    | Evalue v => v
    | If (e, t, f) =>
      switch (eval e) {
      | VBool true => eval t
      | VBool false => eval f
      | VInt _ => failwith "Invalid AST"
      }
    | Eq (a, b) =>
      switch (eval a, eval b) {
      | (VInt x, VInt y) => VBool (x == y)
      | (VBool _, VBool _)
      | (VBool _, VInt _)
      | (VInt _, VBool _) => failwith "Invalid AST"
      }
    };

let eval_int: value => int =
  fun x =>
    switch x {
    | VInt x => x
    | VBool _ => failwith "Got VBool, expected VInt"
    };

let eval_bool: value => bool =
  fun v =>
    switch v {
    | VBool v => v
    | VInt _ => failwith "Got VBool, expected VInt"
    };

type value' _ = | GBool' of bool :value' bool | GInt' of int :value' int;

type expr' _ =
  | GValue of (value' 'a) :expr' 'a
  | GIf of (expr' bool) (expr' 'a) (expr' 'a) :expr' 'a
  | GEq of (expr' 'a) (expr' 'a) :expr' bool;

let rec eval': type a. expr' a => a =
  fun
  | GValue (GBool' b) => b
  | GValue (GInt' i) => i
  | GIf b l r => eval' b ? eval' l : eval' r
  | GEq a b => eval' a == eval' b;
