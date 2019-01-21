/* function takeANumber(line, name)
{
  line.push(name)
  return "Welcome, " + name + ". You are number " + line.length + " in line."
} */

var i=0
function takeANumber (line)
{
 i++
 line.push(i)
 return "Welcome your number is " + i + "."
}


function nowServing(line)
{
  if (line.length===0)
  return "There is nobody waiting to be served!"
else
{
  var name = line.shift()
  return "Currently serving " + name + "."
}
}

function currentLine(line)
{
  var inline = []
  if (line.length===0)
  return "The line is currently empty."
else
{for (var i=0; i<line.length; i++)
  {
    inline.push(`${i+1}. ${line[i]}` ) 
  }
  inline=inline.join(", ")
  return "The line is currently: " + inline
}
}