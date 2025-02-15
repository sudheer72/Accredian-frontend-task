import { ListGroup, Table } from "flowbite-react";
import React, { useState } from "react";
import { BenefitsData } from "../../data/data";
import { HiAcademicCap } from "react-icons/hi2";
import { FaAngleRight, FaChevronDown } from "react-icons/fa";
import Switch from "@mui/material/Switch";
import { Button } from "@mui/material";
import { Button as FlowbiteButton } from "flowbite-react";
import Referral from "../../pages/Referral";

function ReferBenefits() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { key: "all", label: "All Programs" },
    { key: "strategy", label: "Strategy & Leadership" },
    { key: "business", label: "Business Management" },
    { key: "product", label: "Product Management" },
    { key: "fintech", label: "Fintech" },
    { key: "senior", label: "Senior Management" },
    { key: "data", label: "Data Science" },
    { key: "digital", label: "Digital Transformation" },
    { key: "business-analytics", label: "Business Analytics" },
  ];

  // ✅ Filter Benefits Data Based on Category
  const filteredData =
    selectedCategory === "all"
      ? BenefitsData
      : BenefitsData.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 bg-gray-50 rounded-lg shadow">
      <Referral openModal={isModalOpen} setOpenModal={setIsModalOpen} />

      <h2 className="text-center font-bold text-3xl text-gray-800">
        Discover <span className="text-indigo-600">Referral Benefits</span>
      </h2>

      <div className="flex justify-end my-3">
        <Switch checked name="loading" color="primary" />
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="col-span-1">
          <ListGroup className="w-full bg-white shadow-md rounded-lg">
            {categories.map(({ key, label }) => (
              <ListGroup.Item
                key={key}
                href="#"
                onClick={() => setSelectedCategory(key)}
                active={selectedCategory === key}
                className={`flex justify-between items-center p-3 rounded-lg transition ${
                  selectedCategory === key
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-indigo-200"
                }`}
              >
                {label}
                <FaAngleRight className="w-5 h-5" />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

        {/* Content Section */}
        <div className="col-span-3">
          {filteredData.length > 0 ? (
            <div className="overflow-x-auto shadow-md rounded-lg">
              <Table>
                <Table.Head>
                  {["Programs", "Referrer Bonus", "Referee Bonus"].map((heading, index) => (
                    <Table.HeadCell
                      key={index}
                      className="bg-indigo-500 text-white font-semibold border-r border-gray-400 py-2 text-center"
                    >
                      {heading}
                    </Table.HeadCell>
                  ))}
                </Table.Head>
                <Table.Body className="divide-y">
                  {filteredData.map((item) => (
                    <Table.Row key={item.id} className="bg-white hover:bg-gray-100 transition">
                      <Table.Cell className="border-r border-gray-400 py-2 flex gap-2 items-center">
                        <HiAcademicCap className="text-indigo-600 h-5 w-5" />
                        {item.program}
                      </Table.Cell>
                      <Table.Cell className="border-r border-gray-400 py-2 text-center">
                        {item.referrer}
                      </Table.Cell>
                      <Table.Cell className="py-2 text-center">{item.referee}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          ) : (
            <div className="flex justify-center items-center h-40">
              <h1 className="text-xl font-semibold text-gray-700">No programs available.</h1>
            </div>
          )}
        </div>
      </div>

      {/* Show More Button */}
      <div className="flex justify-end py-3">
        <FlowbiteButton color="light" size="xs" outline>
          <span className="flex items-center gap-2 text-gray-600">
            Show More <FaChevronDown className="h-3 w-3" />
          </span>
        </FlowbiteButton>
      </div>

      {/* Refer Now Button */}
      <div className="flex justify-center pb-6">
        <Button
          variant="contained"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-lg px-6 py-2 rounded-lg shadow-md transition"
          onClick={() => setIsModalOpen(true)}
        >
          Refer Now
        </Button>
      </div>
    </div>
  );
}

export default ReferBenefits;
