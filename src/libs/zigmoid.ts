import {
    Int64,
} from 'o1js';

export const zigmoid = (input: Int64, n: Int64): Int64 => {
    // tmp = 198695283 * n**2 - 1570683 * n * input - 4001354 * input * input;
    let tmp = n.mul(n).mul(1987).sub(input.mul(n).mul(16)).sub(input.mul(input).mul(40));
    // out * (n**2) * (10**9) + remainder === 502073021 * n**3 + in * tmp;
  
    let dividend = n.mul(n).mul(n).mul(5021).add(input.mul(tmp));
    let divisor = n.mul(n).mul(10000);
    let remainder = dividend.mod(divisor.magnitude);
    let quotient = dividend.div(divisor);
  
    //assert(quotient*divisor + remainder === dividend);
    quotient.mul(divisor).add(remainder).assertEquals(dividend);
    return quotient;
  }