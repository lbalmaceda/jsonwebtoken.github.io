const rsaPublicKey =
`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDdlatRjRjogo3WojgGHFHYLugd
UWAY9iR3fy4arWNA1KoS8kVw33cJibXr8bvwUAUparCwlvdbH6dvEOfou0/gCFQs
HUfQrSDv+MuSUMAe8jzKE4qW+jK+xQU9a03GUnKHkkle+Q0pX/g6jXZ7r1/xAK5D
o2kQ+X5xK9cipRgEKwIDAQAB
-----END PUBLIC KEY-----`;

const esPublicKey = 
`-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEEVs/o5+uQbTjL3chynL4wXgUg2R9
q9UU8I5mEovUf86QZ7kOBIjJwqnzD1omageEHWwHdBO6B+dFabmdT9POxg==
-----END PUBLIC KEY-----`;

module.exports = {
  none: {
    token: 'eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.'
  },
  hs512: {
    token: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwidGVzdCI6ImhzNTEydGVzdCJ9.RVBLQLIZqA6n8prLoVLsxsYb0nGg1-q4j-qUOwN7zjCC9RwS3HlOG2bNUB6cTKS7WBRHScVXnmwCoeHP0gVtDA',
    secret: 'secret'
  },
  hs384: {
    token: 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwidGVzdCI6ImhzMzg0dGVzdCJ9.xD9kvywowrJYO9Lo-zwXvmydjc6DkGtJHUWAmTjL144xSqExhnhUgoTG_04Lu4Ma',
    secret: 'secret'
  },
  hs256: {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwidGVzdCI6ImhzMjU2dGVzdCJ9.mNZ_thfG9tYoIoV7TD_CQG6sQRAfGJqmBdEbU_uf4-0',
    secret: 'secret'
  },
  rs256: {
    token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwidGVzdCI6InJzMjU2dGVzdCJ9.qEQ_Gi7jYveN-sg-nRol_y0ULB0rtGIOGdOly0SkMFpc3HUxnj8addm-0UNdrJYLJv3CsFpXj_HnldvgDxpk0XAw8ArbeK-jCoxNFqUGBSITsLXQY5Chs8dh80C4vhKwxFqzo1FVxT2RlZIp_wN9dteKelGG-IVFNAhIlcHsSdw',
    publicKey: rsaPublicKey
  },
  rs384: {
    token: 'eyJhbGciOiJSUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwidGVzdCI6InJzMzg0dGVzdCJ9.YdJv8eHUfsheBaH8Y2OprzO8ewP4-wfuyCtYjx-vm-KybqPhfKDxaq9QsjYqNWPn7rZVnc843FL0G-0rSl2YDQG5QM0uW44jl20C5-LouloaSQ0Mg88Wj8-0kt8R22bXBeBc1tNuIezlna80pCvxZrZnVkphLGKlWXOu7tSwUVc',
    publicKey: rsaPublicKey
  },
  rs512: {
    token: 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwidGVzdCI6InJzNTEydGVzdCJ9.x6PkeyOYFCdmxV-JfsHmeVXad41h3AoyldaQVDaWJbD9SLXnz_hkbQ6KcUJGIzkLnL5KWuRc1IAYfa1lxk3ijWS0p42YKLbqdX3tXBvuaAr7bV8KM-rb_6RqhLqGXjkVJ8jjpCy0uu4VS3Yg0xojbm8sY6Jf-YbggRpFpvF_CxU',
    publicKey: rsaPublicKey
  },
  es256: {
    token: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwidGVzdCI6ImVzMjU2dGVzdCJ9.Ir41cyW-pc_pM2L0_cl0spnr8Y3GRUYKm7LfLhScI8SaPLfaQn9B7uES8OkYxu1YfudkYfgoFV_Bh1Qvu8lf7g',
    publicKey: esPublicKey
  },
  es384: {
    token: 'eyJhbGciOiJFUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwidGVzdCI6ImVzMzg0dGVzdCJ9.xy86p6ogINec1cucUmjEUIPtN2-kkg22lbVqGlLqYY4RRI5AVHv-UndXAfe6wBxpggV1GFH5gyacOs1TWs1uhQ',
    publicKey: esPublicKey
  },
  ps256: {
    token: 'eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwidGVzdCI6InBzMjU2dGVzdCJ9.jVQfrR2D8k3I5FsIBDW2zn1OINhemVA7T1izMSlYb-7MNlw4DrlcifJ0ilQwXHNw1rZI00OkGjeoJBNpArhEROCY8odXLosjvetRvfp0QPyH0mL5IehWcSsSAhJU0jL8FNQ44HBAUnTQ41llG6p1q7w7qIVcHnFmyqaXcFCP5B8',
    publicKey: rsaPublicKey
  },
  ps384: {
    token: 'eyJhbGciOiJQUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwidGVzdCI6InBzMzg0dGVzdCJ9.yS13poMub8KhYAT3p_Sd7FBIH6DtKLf-aPaxlNnyWwWmYXJm75uxG1XJ6pwTNZ2Sw-nw_YyFALVpO3QyUPtK16ZkyyQ2CrJ6w0nfRL5Bi7uah8OKXZh5ykqK9hq_No83AAPK53O-NPkG5CSreaexHOpCPqdjruV7JWyHysGFA80',
    publicKey: rsaPublicKey
  }
};
