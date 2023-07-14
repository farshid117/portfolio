import EllipsisText from "react-ellipsis-text";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const CoursesCard = ({item, index}) => {
    return (
        <div>
            <Card key={index} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"

                        image={item.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold", fontFamily: "Vazir" }}>
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <EllipsisText text={item.info} length={"120"} />
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className='d-flex'>
                    <Button component="a" variant='text' target='_blank' href={item.link} size="small" color="primary">
                        اطلاعات بیشتر
                    </Button>
                </CardActions>
            </Card>

        </div>
    );
}

export default CoursesCard;
