module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/mocks/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/src/mocks/styleMock.js',
    '^src(.*)$': '<rootDir>/src$1',
    '^app(.*)$': '<rootDir>/src/app$1',
    '^assets(.*)$': '<rootDir>/src/assets$1',
    '^scss(.*)$': '<rootDir>/src/scss$1',
    '^services(.*)$': '<rootDir>/src/services$1',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '\\.(pug)$': 'jest-transform-pug',
  },
};
