import { Radio, RadioGroup, TextInput } from "@mantine/core";
import React, { useCallback, useState } from "react";
import styled from "styled-components";

function Flag(props: { flag: string }) {
  const [activeFlags, setActiveFlags] = useState<any[]>([]);

  return (
    <Wrapper>
      {/* FLAG DETAILS */}
      {props.flag}
      <FF>
        <ul>
          <li>
            Flag Name: <TextInput placeholder="Flag Name:" />
          </li>
          <li>
            Identify: <TextInput placeholder="Identify:" />
          </li>
          {/* <li>
            Default On Variont: ON{" "}
            <TextInput placeholder="Default ON Variont:" />{" "}
          </li>
          <li>
            Default OF Variont: OF{" "}
            <TextInput placeholder="Default OF Variont:" />{" "}
          </li> */}
        </ul>
      </FF>
      {/* <List>
        <div>Lista sa kolonama</div>
        <div>Identifaj </div>
        <div>name</div>
        <div>description </div>
        <div>value</div>
      </List> */}
      <Status>
        <table>
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

          <tr /*style={{activeFlags.some((searchFlag: any) => searchFlag === Flag)}} */
            style={{
              backgroundColor: activeFlags.includes("#00ff00") ? "#00ff00" : "",
            }}
          >
            <td>
              {/* <input type="text" name="naziv" placeholder="True" /> */}
              {/* <TextInput placeholder="True" /> 1 red u 1 redu */}
              <td>
                {" "}
                <RadionCenter>
                  <RadioGroup required>
                    <Radio
                      value="react"
                      onClick={() => {
                        setActiveFlags(["#00ff00"]);
                        console.log(activeFlags);
                      }}
                    />
                  </RadioGroup>
                </RadionCenter>
              </td>

              <td>
                <RadionCenter>
                  <RadioGroup>
                    <Radio
                      value="react"
                      onClick={() => {
                        setActiveFlags(["red"]);
                        console.log(activeFlags);
                      }}
                      style={{
                        backgroundColor: activeFlags.includes("red")
                          ? "red"
                          : "",
                      }}
                    />
                  </RadioGroup>
                </RadionCenter>
              </td>
            </td>
            <td>
              {/* <input type="text" name="naziv" placeholder="True" /> */}
              <TextInput placeholder="True" size="xs" />
            </td>
            <td>
              {/* <input type="text" name="naziv" placeholder="True" /> */}
              <TextInput placeholder="True" size="xs" />
            </td>
            <td>
              {/* <input type="text" name="naziv" placeholder="True" /> */}
              <TextInput placeholder="True" size="xs" />
            </td>
            <td>
              {/* <input type="text" name="naziv" placeholder="/" /> */}
              <TextInput placeholder="/" size="xs" />
            </td>
          </tr>
          <tr>
            <td>
              {/* <input type="text" name="naziv" placeholder="False" /> */}
              {/* <TextInput placeholder="False" /> 2 red u 1 redu */}
              <td>
                {" "}
                <RadionCenter>
                  <Radio value="react" />
                </RadionCenter>
              </td>
              <td>
                {" "}
                <RadionCenter>
                  <Radio value="react" />
                </RadionCenter>
              </td>
            </td>
            <td>
              {/* <input type="text" name="naziv" placeholder="False" /> */}
              <TextInput placeholder="False" size="xs" />
            </td>
            <td>
              {/* <input type="text" name="naziv" placeholder="True" /> */}
              <TextInput placeholder="True" size="xs" />
            </td>
            <td>
              {/* <input type="text" name="naziv" placeholder="/" /> */}
              <TextInput placeholder="/" size="xs" />
            </td>

            <td>
              {/* <input type="text" name="naziv" placeholder="True" /> */}
              <TextInput placeholder="True" size="xs" />
            </td>
          </tr>
          <tr>
            <td>
              {/* <input type="text" name="naziv" placeholder="None" /> */}
              {/* <TextInput placeholder="None" />  3 red u 1 redu*/}
              <td>
                {" "}
                <RadionCenter>
                  <Radio value="react" />
                </RadionCenter>
              </td>
              <td>
                {" "}
                <RadionCenter>
                  <Radio value="react" />
                </RadionCenter>
              </td>
            </td>

            <td>
              {/* <input type="text" name="naziv" placeholder="False" /> */}
              <TextInput placeholder="False" size="xs" />
            </td>
            <td>
              {/* <input type="text" name="naziv" placeholder="True" /> */}
              <TextInput placeholder="True" size="xs" />
            </td>

            <td>
              {/* <input type="text" name="naziv" placeholder="/" /> */}
              <TextInput placeholder="/" size="xs" />
            </td>

            <td>
              {/* <input type="text" name="naziv" placeholder="True" /> */}
              <TextInput placeholder="True" size="xs" />
            </td>
          </tr>
        </table>
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
  /* border-bottom: 1px solid #0278d5; */
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

  /* /* border-radius: 1px; */
  /* border: 1px solid black; */

  table,
  td,
  th {
    border: 0.5px solid #d9dae5;
    /* -webkit-box-shadow: 0px 5px 15px -3px #ebebeb;
    box-shadow: 0px 5px 15px -3px #ebebeb; */
    /* text-align: left; */
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
    /* padding: 20px; */
    padding: 8px;
  }
`;

const List = styled.div`
  display: flex;
  padding-top: 30px;
  gap: 20px;
`;
export default Flag;
