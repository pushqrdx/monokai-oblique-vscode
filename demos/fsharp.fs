open System

// Single line comment...
(*
  This is a
  multiline comment.
*)

let text = "Some text..."

type DefaultMailbox<'a>() =
    let mutable inbox = ConcurrentQueue<'a>()
    let awaitMsg = new AutoResetEvent(false)