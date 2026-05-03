// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ERapor {
    struct Rapor {
        string nisn;
        string hashNilai; // Hash dari file PDF
        uint256 timestamp;
        address verifikator;
        bool isValid;
    }

    mapping(string => Rapor) public daftarRapor;
    address public admin;

    constructor() { admin = msg.sender; }

    function simpanRapor(string memory _nisn, string memory _hash) public {
        require(msg.sender == admin, "Hanya Admin");
        daftarRapor[_nisn] = Rapor(_nisn, _hash, block.timestamp, msg.sender, true);
    }

    function verifikasi(string memory _nisn) public view returns (string memory, bool) {
        return (daftarRapor[_nisn].hashNilai, daftarRapor[_nisn].isValid);
    }
}