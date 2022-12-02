let user = prompt("Enter S, W or G, The letter must be Capital")
let cpuI = Math.floor(Math.random() * 3)
let cpu = ["S", "G", "W"][cpuI]

const match = (cpu, user) => {
  if (cpu === user) {
    return "Nobody, The match is Tied"
  }
  else if (cpu === "S" && user === "W") {
    return "Cpu"
  }
  else if (cpu === "W" && user === "S") {
    return "user"
  }
  else if (cpu === "G" && user === "S") {
    return "cpu"
  }
  else if (cpu === "S" && user === "G") {
    return "user"
  }
  else if (cpu === "W" && user === "G") {
    return "cpu"
  }
  else if (cpu === "W" && user === "G") {
    return "cpu"
  }
}
const result = match(cpu, user)
console.log(`CPU is ${cpu} and User is ${user}, The Winner is ${result}`)