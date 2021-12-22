# useForm Hook   

```
    const [values, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = values;
```