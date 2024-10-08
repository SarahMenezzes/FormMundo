import * as C from "@chakra-ui/react"
import { useState } from "react"

const FormPessoal = () => {
    const [gender, setGender] = useState("")

    return (
        <C.VStack spacing={4} align="stretch">

             <C.Text fontSize="2xl" fontWeight="bold" mb={4}>
                Formulário Pessoal
            </C.Text>
            <C.Input type="text" placeholder="Nome"/>
            <C.Input type="text" placeholder="CPF"/>
            <C.Input type="email" placeholder="E-mail"/>

            <C.RadioGroup value={gender} onChange={setGender}>
                <C.Stack direction="row" spacing={4}>
                    <C.Radio value="H">Masculino</C.Radio>
                    <C.Radio value="M">Feminino</C.Radio>
                </C.Stack>
            </C.RadioGroup>
        </C.VStack>
    )
}

export default FormPessoal
