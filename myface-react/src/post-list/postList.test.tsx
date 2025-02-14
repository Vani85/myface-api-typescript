import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PostList } from './postList';
import { MemoryRouter } from 'react-router-dom';

describe('PostList', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
            results: [{
                message: "Test message"
            }]
        })    
    });
});

it('renders postlist page', async () => {
    render(<MemoryRouter><PostList /></MemoryRouter>);
    expect(await screen.findByText("Test message")).toBeVisible;
    expect(global.fetch).toHaveBeenCalledWith("http://localhost:3001/posts");
});