/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

NFT_var=[]

//now we create a function to mint NFTs
function mintNFT (name, description, image, rarity) {
    const nft = {
        name: name,
        description: description,
        image: image,
        rarity: rarity
    };
    NFT_var.push(nft);
    console.log('Minted: '+ name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i<NFT_var.length; i++){
        console.log("\nName: " + NFT_var[i].name)
        console.log("Description: " + NFT_var[i].description)
        console.log("Image: " + NFT_var[i].image)
        console.log("Rarity: " + NFT_var[i].rarity)
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nNumber of Total NFTs minted : "+ NFT_var.length +"\n")
}

//function calls
mintNFT('NFT1', 'This is NFT1', 'image1', 'rare');
mintNFT('NFT2', 'This is NFT2', 'image2', 'common');
mintNFT('NFT3', 'This is NFT3', 'image3', 'rare');
listNFTs();
getTotalSupply();



