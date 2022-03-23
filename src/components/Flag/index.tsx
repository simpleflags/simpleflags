import { Paper, Radio, RadioGroup, TextInput } from "@mantine/core";
import { formList } from "@mantine/form";
import React, { useCallback, useState } from "react";
import styled from "styled-components";

function Flag(props: { flag: string }) {
  const [first, setFirst] = useState({ on: false, off: false });
  const [activeFlags, setActiveFlags] = useState<any[]>([]);
  const [gender, setGender] = React.useState();
  const handleChange = (e: any) => {
    const target = e.target;
    if (target.checked) {
      setGender(target.value);
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(gender);
  };
  return (
    <Wrapper>
      {props.flag}
      <FF>
        <ul>
          <li>
            Flag Name: <TextInput placeholder="Flag Name:" />
          </li>
          <li>
            Identify: <TextInput placeholder="Identify:" />
          </li>
        </ul>
      </FF>
      <Status>
        <Paper>
          <table style={{ marginBottom: 50, marginRight: 50 }}>
            <tr>
              <th>
                Default
                <ON>
                  <th>On</th>
                  <th>Off</th>
                </ON>
              </th>
              <th>Identify</th>
              <th>Name</th>
              <th>Description</th>
              <th>Value</th>
            </tr>

            <tr
              style={{
                background: activeFlags.includes("red-1")
                  ? "#00ff00"
                  : activeFlags.includes("red-2")
                  ? "red"
                  : "",
              }}
            >
              <td>
                <td>
                  <form onSubmit={handleSubmit}>
                    {" "}
                    <RadionCenter>
                      <Radio
                        value="red-1"
                        checked={gender === "red-1"}
                        onChange={handleChange}
                        onClick={() => {
                          setActiveFlags(["red-1"]);
                          console.log(activeFlags);
                        }}
                      />
                    </RadionCenter>
                  </form>
                </td>

                <td>
                  <RadionCenter>
                    <Radio
                      value="red-2"
                      checked={gender === "red-2"}
                      onChange={handleChange}
                      onClick={() => {
                        setActiveFlags(["red-2"]);
                        console.log(activeFlags);
                      }}
                    />
                  </RadionCenter>
                </td>
              </td>
              <td>
                <TextInput placeholder="True" size="xs" />
              </td>
              <td>
                <TextInput placeholder="True" size="xs" />
              </td>
              <td>
                <TextInput placeholder="True" size="xs" />
              </td>
              <td>
                <TextInput placeholder="/" size="xs" />
              </td>
            </tr>

            <tr
              style={{
                backgroundColor: activeFlags.includes("red-3")
                  ? "#00ff00"
                  : activeFlags.includes("red-4")
                  ? "red"
                  : "",
              }}
            >
              <td>
                <form onSubmit={handleSubmit}>
                  <td>
                    {" "}
                    <RadionCenter>
                      <Radio
                        disabled={first.on}
                        value="red-3"
                        checked={gender === "red-3"}
                        onChange={handleChange}
                        onClick={() => {
                          setActiveFlags(["red-3"]);
                          console.log(activeFlags);
                        }}
                      />
                    </RadionCenter>
                  </td>
                  <td>
                    {" "}
                    <RadionCenter>
                      <Radio
                        value="red-4"
                        checked={gender === "red-4"}
                        onChange={handleChange}
                        onClick={() => {
                          setActiveFlags(["red-4"]);
                          console.log(activeFlags);
                        }}
                      />
                    </RadionCenter>
                  </td>
                </form>
              </td>

              <td>
                <TextInput placeholder="False" size="xs" />
              </td>
              <td>
                <TextInput placeholder="True" size="xs" />
              </td>
              <td>
                <TextInput placeholder="/" size="xs" />
              </td>

              <td>
                <TextInput placeholder="True" size="xs" />
              </td>
            </tr>
            <tr
              style={{
                backgroundColor: activeFlags.includes("red-5")
                  ? "#00ff00"
                  : activeFlags.includes("red-6")
                  ? "red"
                  : "",
              }}
            >
              <td>
                <td>
                  {" "}
                  <RadionCenter>
                    <Radio
                      value="red-5"
                      checked={gender === "red-5"}
                      onChange={handleChange}
                      onClick={() => {
                        setActiveFlags(["red-5"]);
                        console.log(activeFlags);
                      }}
                    />
                  </RadionCenter>
                </td>
                <td>
                  {" "}
                  <RadionCenter>
                    <Radio
                      value="red-6"
                      checked={gender === "red-6"}
                      onChange={handleChange}
                      onClick={() => {
                        setActiveFlags(["red-6"]);
                        console.log(activeFlags);
                      }}
                    />
                  </RadionCenter>
                </td>
              </td>

              <td>
                <TextInput placeholder="False" size="xs" />
              </td>
              <td>
                <TextInput placeholder="True" size="xs" />
              </td>

              <td>
                <TextInput placeholder="/" size="xs" />
              </td>

              <td>
                <TextInput placeholder="True" size="xs" />
              </td>
            </tr>
          </table>
        </Paper>
      </Status>
    </Wrapper>
  );
}

const RadionCenter = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ON = styled.div`
  padding-left: 55px;
  text-align: center;
`;
const Wrapper = styled.div``;

const FF = styled.div`
  font-size: 18px;
  border-bottom: 0.5px solid #d9dae5;

  text-align: left;
  ul {
    display: flex;
    list-style: none;
    gap: 20px;
  }
  li,
  input {
    border: none;
    background-color: #effbff;
    font-size: 16px;
  }
  li:nth-child(1) {
    border-bottom: 1px solid #0278d5;
    width: 200px;
  }
  li:nth-child(2) {
    border-bottom: 1px solid #0278d5;
    width: 200px;
  }

  ul li::before {
    content: "• ";
    color: #0278d5;
  }
`;

const Status = styled.table`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-bottom: 30px;

  table,
  td,
  th {
    border-collapse: collapse;
    width: 165vh;
  }
  th:nth-child(1) {
    width: 20%;
  }

  th:nth-child(2) {
    width: 23%;
  }

  th:nth-child(3) {
    width: 20%;
  }

  th:nth-child(4) {
    width: 18%;
  }

  th,
  td {
    padding: 8px;
  }
`;

const List = styled.div`
  display: flex;
  padding-top: 30px;
  gap: 20px;
`;
export default Flag;