function email() {
      var Mail = document.getElementById("email").value
      const aro = "@"
      var e = true
      var u = 0
      var p = document.getElementById("p")
      var prg = document.getElementById("prg")
      const symbols = ["#","$","%","^","&","*","()","?","<>","//","!","=","+","-",",","\\"]
      for (let i = 0; i < Mail.length; i++) {
        if (Mail[i]===aro){
          u++
        }
        if (Mail[i] in symbols) {
          e=false
        }
        }

        if (u===1 || e===true){
        p.style.display="block"
        prg.style.display="none"
        }
        else{
          console.log("Invalide")
           p.style.display="none"
        prg.style.display="block"
        }
      }