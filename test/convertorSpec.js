var expect    = require('chai').expect;
var convertor = require('../lib/convertor.js');

describe('convertor', function() {
  var result;

  describe('powersOfTenSuffix', function() {  
    it('should convert degree to text', function() {
      result = convertor.powersOfTenSuffix(1);
      expect(result).to.equal('thousand');
    });

    it('a degree of zero should return empty string', function() {
      result = convertor.powersOfTenSuffix(0);
      expect(result).to.equal('');
    });
  });

  describe('_hundredsToText', function() {
    beforeEach(function() {
      result = convertor._hundredsToText(300);
    });

    it('converts the number to text', function() {
      expect(result).to.include('three');
    });

    it('includes the word "hundred"', function() {
      expect(result).to.include('hundred');
    });

    it('puts a space between number as text and "hundred"', function() {
      expect(result).to.include('three hundred');
    });

    it('appends a space', function() {    
      expect(result.slice(-1)).to.equal(' ');
    });
  });

  describe('_teenToText', function() {
    it('converts the number to text', function() {
      result = convertor._teenToText(12);
      expect(result).to.equal('twelve');
    });
  });

  describe('_tensToText', function() {
    it('converts the tens place to text', function() {
      result = convertor._tensToText(35);
      expect(result).to.equal('thirty');
    });
  });

  describe('_digitToText', function() {
    it('converts the number to text', function() {
      result = convertor._digitToText(1);
      expect(result).to.equal('one');
    });
  });

  describe('_isTeen', function() {
    it('returns true when 10 < parameter < 20', function() {
      result = convertor._isTeen(12);
      expect(result).to.equal(true);
    });

    it('returns false when parameter <= 10', function() {
      result = convertor._isTeen(10);
      expect(result).to.equal(false);
    });

    it('returns false when parameter >= 20', function() {
      result = convertor._isTeen(20);
      expect(result).to.equal(false);
    });
  });
});