function fibonacci(n) {
    if (n === 0) {
      return [0]; // Basis: deret Fibonacci untuk n=0 adalah [0]
    } else if (n === 1) {
      return [0, 1]; // Basis: deret Fibonacci untuk n=1 adalah [0, 1]
    }
  
    // Rekursi: panggil fungsi Fibonacci untuk (n - 1) dan tambahkan elemen terakhir
    const series = fibonacci(n - 1);
    series.push(series[series.length - 1] + series[series.length - 2]); // Tambahkan elemen terakhir
    return series; // Kembalikan deret Fibonacci
  }
  
// Jangan hapus kode di bawah ini!
export default fibonacci;
