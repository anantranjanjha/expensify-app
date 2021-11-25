
const add=(a,b)=>a+b;

test('testing for sum',()=>{
    const sum=add(3,4);
    expect(sum).toBe(7);
})