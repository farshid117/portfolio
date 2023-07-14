import { useState } from 'react';
import { Visibility, VisibilityOff, } from '@mui/icons-material';
import {  IconButton, InputAdornment,  TextField } from '@mui/material';

export const OutlinedTextField = (label,) => {
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = (e) => {
        setShowPassword(prev => !prev)
    }
    return (
        <TextField
            variant='outlined' //default value
            label={"پسورد را وارد کنید"}
            name="password"
            rows={6}
            id="outlined-end-adornment"
            type= {showPassword ? "text" : "password"}
            autoComplete="off"
            size='small'
            fullWidth
            focused
            error= ""
            helperText="لطفا پسورد را وارد کنید"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    )
}

export const FilledTextField = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = (e) => {
        setShowPassword(prev => !prev)
    }
    return (
        <TextField
            variant='filled'
            label="پسورد را وارد کنید"
            name="password"
            id="filled-end-adornment"
            type={showPassword ? 'text' : 'password'}
            sx={{ m: 1, width: '25ch' }}
            autoComplete="off"
            focused
            color='secondary'
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    )
}

export const StandardTextField = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = (e) => {
        setShowPassword(prev => !prev)
    }
    return (
        <TextField
            variant='standard'
            label="پسورد را وارد کنید"
            id="standard-end-adornment"
            name="password"
            type={showPassword ? 'text' : 'password'}
            sx={{ m: 1, width: '25ch' }} //25 characters
            autoComplete="off"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="start">
                        <IconButton
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    )
}
