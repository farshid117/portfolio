import { Chip, Divider } from '@mui/material';

const DividerChip = ({color, label, borderColor, icon, avatar}) => {
    return (
        <>
            <Divider sx={{
                "&::before , &::after": {
                    borderColor: {borderColor},
                    borderWidth: 2
                }
            }}>
                <Chip label={label}
                      color={color}
                      icon={icon}
                      avatar={avatar}
                      sx={{p:{xs: 2, md: 3}, verticalAlign:"center", direction:"rtl", fontSize:16, fontWeight:{md:"bold"}}}
                />
            </Divider>
        </>
    );
}

export default DividerChip;
