import React from 'react';
import { Card, List, Label, Button } from 'semantic-ui-react'
import './RightGrid.css';

export default function RightGrid() {
    return (
        <div className="RightGrid">
            <div className="RightTagGrid">
                <span className="RightTag"># Info</span>
            </div>
            <Card style={{width:'90%'}} centered>
                <Card.Content header='BOT UTTERANCE' />
                <Card.Content style={{fontSize:'25px'}} description='Oh, will you have a vacation?' />
            </Card>
            <div style={{height:'5%'}}></div>
            <Card style={{width:'90%'}} centered>
                <Card.Content header='EMOTION' />
                <Card.Content extra>
                <List divided style={{fontSize:'20px', color:'#424242'}}>
                    <List.Item style={{height:'40px'}}>
                        <Label style={{fontSize:'18px'}} size={'large'} color='red' horizontal>
                            Happiness
                        </Label>
                        73%
                    </List.Item>
                    <List.Item style={{height:'50px'}}>
                        <Label style={{fontSize:'18px'}} size={'large'} color='violet' horizontal>
                            Sadness
                        </Label>
                        15%
                    </List.Item>
                    <List.Item style={{height:'40px'}}>
                        <Label style={{fontSize:'18px'}} size={'large'} color='grey' horizontal>
                            Neutral
                        </Label>
                        12%
                    </List.Item>
                </List>
                </Card.Content>
            </Card>
            <div className="RightButtonGrid">
                <Button style={{width:'90%', height:'50px', fontSize:'20px'}} fluid color='red'>RESET</Button>
            </div>
        </div>
    );
}