#include <iostream>
#include <string>
using namespace std;
// Helper function to perform binary addition recursively
string add_binary_helper(const string& binary1, const string& binary2, int position, int c
arry) {
    // Base case: If there are no bits left to add and no carry, return an empty string
    if (position < 0 && carry == 0) {
    return "";
    }
    // If all bits are processed but carry remains, return "1" for the carry
    if (position < 0 && carry == 1) {
    return "1";
    }
    // Get the bits at the current position or default to 0 if out of bounds
    int bit1 = (position >= 0 && binary1[position] == '1') ? 1 : 0;
    int bit2 = (position >= 0 && binary2[position] == '1') ? 1 : 0;
    // Calculate the sum and new carry
    int sum = bit1 + bit2 + carry;
    int resultBit = sum % 2; // The resulting bit at the current position
    carry = sum / 2; // The carry for the next higher position
    // Recur for the next bit to the left, and add the current result bit to the result
    return add_binary_helper(binary1, binary2, position - 1, carry) + to_string(resultBi
    t);
}
// Main function to add two binary numbers represented as strings
string add_binary_numbers(string binary1, string binary2) {
    int position = binary1.size() - 1; // Start from the last bit position
    int carry = 0; // Initialize carry to 0
    return add_binary_helper(binary1, binary2, position, carry);
}
int main() {
    string binary1, binary2;
    cout << "Enter first 30-bit binary number: ";
    cin >> binary1;
    cout << "Enter second 30-bit binary number: ";
    cin >> binary2;
    // Ensure inputs are exactly 30 bits
    if (binary1.size() != 30 || binary2.size() != 30) {
    cout << "Error: Both binary numbers must be 30 bits long." << endl;
    return 1;
    }
    string result = add_binary_numbers(binary1, binary2);
    cout << "Sum: " << result << endl;
    return 0;
}