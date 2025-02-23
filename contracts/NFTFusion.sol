// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTFusion is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct Trait {
        string name;
        string value;
    }

    struct NFTMetadata {
        string name;
        string description;
        string image;
        Trait[] traits;
    }

    mapping(uint256 => NFTMetadata) private _tokenMetadata;
    mapping(uint256 => bool) private _fusedNFTs;

    event NFTFused(uint256 indexed newTokenId, uint256 nft1Id, uint256 nft2Id);

    constructor() ERC721("NFT Fusion", "NFTF") Ownable(msg.sender) {}

    function fuseNFTs(
        address nft1Contract,
        uint256 nft1TokenId,
        address nft2Contract,
        uint256 nft2TokenId,
        string memory name,
        string memory description,
        string memory image,
        Trait[] memory traits
    ) external returns (uint256) {
        require(
            IERC721(nft1Contract).ownerOf(nft1TokenId) == msg.sender,
            "Not owner of NFT 1"
        );
        require(
            IERC721(nft2Contract).ownerOf(nft2TokenId) == msg.sender,
            "Not owner of NFT 2"
        );

        // Burn or lock original NFTs
        IERC721(nft1Contract).transferFrom(msg.sender, address(this), nft1TokenId);
        IERC721(nft2Contract).transferFrom(msg.sender, address(this), nft2TokenId);

        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        _mint(msg.sender, newTokenId);
        _tokenMetadata[newTokenId] = NFTMetadata(name, description, image, traits);

        emit NFTFused(newTokenId, nft1TokenId, nft2TokenId);

        return newTokenId;
    }

    function getTokenMetadata(uint256 tokenId)
        external
        view
        returns (NFTMetadata memory)
    {
        require(_exists(tokenId), "Token does not exist");
        return _tokenMetadata[tokenId];
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(_exists(tokenId), "Token does not exist");
        // Implement token URI generation logic here
        return _tokenMetadata[tokenId].image;
    }
}

