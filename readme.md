# Facebook reels publisher

## Introduction

This Node.js web automation project utilizes Axios and Puppeteer to automate the process of gathering video links from a TikTok account and publishing these videos as reels on a Facebook page. It is designed to simplify the task of cross-platform content sharing, particularly for social media managers and content creators.

## Prerequisites

Before you can use this project, ensure you have the following prerequisites installed:

- **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

## Installation

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/mohamedelbadawi/facebookReelsPublisher.git
   ```

2. Navigate to the project directory:

   ```
   cd facebookReelsPublisher
   ```

3. Install the project dependencies:

   ```
   npm install
   ```

## Usage

To use this project, follow these steps:


1. **Run the script:**

   Run the following command to start the automation process:

   ```
   npm start
   ```

   This will trigger the script to gather video links from the TikTok account, download each video, and then publish them as reels on your Facebook page.
2. **Configure your credentials:**

   Provide the required data in command line:

   - `TikTokAccountLink`: The link to the TikTok account from which you want to gather videos.
   - `FacebookPageId`:**** The Facebook page ID where you want to publish the videos.
   - `FacebookPageAccessToken`: The access token for your Facebook page.


3. **Monitor the progress:**

   The script will provide feedback and progress updates in the terminal. It will display which videos are being downloaded and published.

4. **Sit back and relax:**

   The script will handle the entire process, and you can monitor the automation in real-time.

## Customization

If you'd like to customize the behavior of the script, you can explore and modify the `index.js` file to suit your specific requirements. You can add error handling, adjust timeouts, or implement additional features as needed.

## Contribution

Feel free to contribute to this project by creating pull requests, reporting issues, or suggesting improvements. Your contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

Please note that web automation can have legal and ethical implications. Ensure that you have the necessary permissions and rights to gather content from TikTok and publish it on Facebook. Use this script responsibly and in compliance with the terms of service of both platforms.

## Contact

If you have any questions or need assistance with this project, feel free to reach out to [linkedin](https://www.linkedin.com/in/mohamed-reda-elbadawi/).

Happy automating!