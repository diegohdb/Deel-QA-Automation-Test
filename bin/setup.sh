echo "=== Starting project setup ==="
if ! command -v 'node' > /dev/null; then
  echo "Node is not installed. Install before continuing."
  exit 1
fi
if ! command -v 'npm' > /dev/null; then
  echo "Npm is not installed. Install before continuing."
  exit 1
fi

echo "=== Node installed. Proceeding... ==="
echo "=== Npm installed. Proceeding... ==="

echo "=== Building dependencies ==="
npm install
echo "Setup Finished! Add your credentials (email and password) on cypress.json"
echo "Setup Finished! Run \"npm run test:chrome\" to run the tests on Chrome"
echo "Setup Finished! Run \"npm run report:allure\" to get the Allure report"
echo "Setup Finished! Run \"npm run test:chrome:allure\" to run on Chrome and get the Allure reports"