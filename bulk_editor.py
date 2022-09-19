with open("js.txt", "w+") as wFile:
    with open("src/svg/interactable.js", "r") as rFile:
        for line in rFile.readlines():
            wFile.write(line)

            sLine = line.strip()
            if sLine.startswith("id"):
                wFile.write(
                    "\t\t\t\tstroke={selected === '" + sLine[4:-1] + "' ? '#fff' : '#000'}\n")
