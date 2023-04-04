import profileService from '@/src/services/profileService'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import styles from '../../../../styles/profile.module.scss'
import ToastComponent from '../../commom/toast'

const UserForm = () => {
    const router = useRouter()
    const [color, setColor] = useState("")
    const [toastIsOpen, setToastIsOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [firstName, setFirstName ] = useState("")
    const [lastName, setLastName ] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setChangeEmail] = useState("")
    const [initialEmail,  setInitialEmail] = useState(email) 
    const [created_at, setCreatedAt] = useState("")

    const date = new Date(created_at);
    const month = date.toLocaleDateString("default", { month: "long" });

    useEffect(() => {
        profileService.fetchCurrent().then((user) => {
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setPhone(user.phone);
            setChangeEmail(user.email);
            setInitialEmail(user.email)
            setCreatedAt(user.createdAt);
        });
    }, []);

    const handleUserUpdate = async function (event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const res = await profileService.userUpdate({
            firstName, 
            lastName, 
            phone, 
            email, 
            created_at
        })

        if (res === 200){
            setToastIsOpen(true)
            setErrorMessage("Informações alteradas com sucesso!")
            setColor("bg-success")
            setTimeout(() => {
                setToastIsOpen(false)
            }, 1000 * 3)

            if (email != initialEmail){
                router.push('/')
                sessionStorage.clear()
            }
            
        } else {
            setToastIsOpen(true)
            setErrorMessage("Email invalido!")
            setColor("bg-danger")
            setTimeout(() => {
                setToastIsOpen(false)
            }, 1000 * 3)
        } 

    }

    return (
        <>
            <Form onSubmit={handleUserUpdate} className={styles.form}>
                <div className={styles.formName}>
                <p className={styles.nameAbbreviation}>
                    {firstName.slice(0, 1)}
                    {lastName.slice(0, 1)}
                </p>
                <p className={styles.userName}>
                    {`${firstName} ${lastName}`}
                </p>
                </div>
                <div className={styles.memberTime} >
                    <img src="/profile/iconUserAccount.svg" alt="iconProfile" className={styles.memberTimeImg}/>
                    <p className={styles.memberTimeText}>Membro desde <br /> {`${date.getDate()} de ${month} de ${date.getFullYear()}`}
  </p>
                </div>
                <hr />
                <div className={styles.inputFlexDiv}>
                    <FormGroup>
                    <Label className={styles.label} for="firstName">
                        NOME
                    </Label>
                    <Input
                        name="firstName"
                        type="text"
                        id="firstName"
                        placeholder="Qual o seu primeiro nome?"
                        required
                        className={styles.inputFlex}
                        value={firstName}
                        onChange={(event) => {setFirstName(event.target.value)}}
                    />
                    </FormGroup>
                    <FormGroup>
                        <Label className={styles.label} for="lastName">
                            SOBRENOME
                        </Label>
                        <Input
                        name="lastName"
                        type="text"
                        id="lastName"
                        placeholder="Qual o seu último nome?"
                        required
                        className={styles.inputFlex}
                        value={lastName}
                        onChange={(event) => {setLastName(event.target.value)}}
                        />
                    </FormGroup>
                </div>
                <div className={styles.inputNormalDiv}>
                    <FormGroup>
                    <Label className={styles.label} for="phone">
                        WHATSAPP / TELEGRAM
                    </Label>
                    <Input
                    name="phone"
                    type="tel"
                    id="phone"
                    placeholder="(xx) 9xxxx-xxxx"
                    required
                    className={styles.input}
                    value={phone}
                    onChange={(event) => {setPhone(event.target.value)}}
                    />
                </FormGroup>
                <FormGroup>
                    <Label className={styles.label} for="email">
                        E-MAIL
                    </Label>
                    <Input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Coloque o seu email"
                    required
                    className={styles.input}
                    value={email}
                    onChange={(event) => {setChangeEmail(event.target.value)}}
                    />
                </FormGroup>

                <Button type='submit' className={styles.formBtn} outline>
                    Salvar Alterações
                </Button>
                </div>
            </Form>
            <ToastComponent color={color} isOpen= {toastIsOpen} message = {errorMessage} />
        </>
    )
}

export default UserForm