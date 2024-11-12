import React, {Provider} from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import {createStore} from "redux";
import App from "../App";
import DataTable from "../components/DataTable";
import Header from "../components/Header";
import {DataInterface} from "../interfaces/DataInterface";
import {rootReducer} from "../store/reducers/rootReducer";

// Mock data to be used in tests
const mockData: DataInterface[] = [
    {
        id: 1, operation: "Task A", score: 30, timestamp: "2023-01-01T12:00:00Z", status: "Interrupted"
    },
    {
        id: 2, operation: "Task B", score: 60, timestamp: "2023-01-02T12:00:00Z", status: "Failed"
    },
    {
        id: 3, operation: "Task C", score: 100, timestamp: "2023-01-03T12:00:00Z", status: "Finished"
    },
];

describe("DataTable Component", () => {
    it("should render without crashing", () => {
        act(() => {
            render(<DataTable data={mockData} />);
        });
        expect(screen.getByText("Task A")).toBeInTheDocument();
        expect(screen.getByText("Task B")).toBeInTheDocument();
        expect(screen.getByText("Task C")).toBeInTheDocument();
    });
    
    it("should render the correct status text", () => {
        act(() => {
            render(<DataTable data={mockData} />);
        });
        expect(screen.findAllByText("Interrupted"));
        expect(screen.findAllByText("Failed"));
        expect(screen.findAllByText("Finished"));
    });
    
    it("should render column headers properly", () => {
        act(() => {
            render(<DataTable data={mockData} />);
        });
        expect(screen.findAllByText((content, element) => element?.textContent === "Operation"));
        expect(screen.findAllByText((content, element) => element?.textContent === "Status"));
        expect(screen.findAllByText((content, element) => element?.textContent === "Score"));
        expect(screen.findAllByText((content, element) => element?.textContent === "Timestamp"));
    });
    
    it("should handle checkbox selection", () => {
        act(() => {
            render(<DataTable data={mockData} />);
        });
        const checkboxes = screen.getAllByRole("checkbox");
        expect(checkboxes).toHaveLength(mockData.length + 1); // +1 for the header checkbox
        
        // Simulate clicking the first row's checkbox
        act(() => {
            userEvent.click(checkboxes[1]);
        });
        expect(checkboxes[1]).toBeChecked();
    });
});


describe("Header Component", () => {
    it("should render the header image", () => {
        act(() => {
            render(<Header />);
        });
        expect(screen.getByAltText("headerImage")).toBeInTheDocument();
    });
});
