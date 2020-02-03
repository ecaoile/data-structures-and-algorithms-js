'use strict';
const LinkedList = require('../linked-list.js');
const mergeLists = require('./ll-merge.js');

describe('mergeLists', () => {
  let ll1 = new LinkedList();
  let ll2 = new LinkedList();

  beforeEach(() => {
    ll1 = new LinkedList();
    ll1 = new LinkedList();
  });

  it('can merge 2 linked lists with values in both', () => {
    ll1.insert(5);
    ll1.insert(3);
    ll1.insert(1);

    ll2.insert(6);
    ll2.insert(4);
    ll2.insert(2);

    const mergeRes = mergeLists(ll1, ll2);

    expect(mergeRes.head.value).toEqual(1);
    expect(mergeRes.head.next.value).toEqual(2);
    expect(mergeRes.head.next.next.value).toEqual(3);
    expect(mergeRes.head.next.next.next.value).toEqual(4);
    expect(mergeRes.head.next.next.next.next.value).toEqual(5);
    expect(mergeRes.head.next.next.next.next.next.value).toEqual(6);
  });

  it('can return the populated linked list when one linked list is empty', () => {
    ll2.insert(3);
    ll2.insert(2);
    ll2.insert(1);

    const mergeRes1 = mergeLists(ll1, ll2);

    expect(mergeRes1.head.value).toEqual(1);
    expect(mergeRes1.head.next.value).toEqual(2);
    expect(mergeRes1.head.next.next.value).toEqual(3);

    ll2 = new LinkedList();
    ll1 = new LinkedList();

    ll1.insert(5);
    ll1.insert(4);
    ll1.insert(3);

    const mergeRes2 = mergeLists(ll1, ll2);

    expect(mergeRes2.head.value).toEqual(3);
    expect(mergeRes2.head.next.value).toEqual(4);
    expect(mergeRes2.head.next.next.value).toEqual(5);
  });

  it('can merge 2 linked lists with different amount of nodes', () => {
    ll1.insert(5);

    ll2.insert(6);
    ll2.insert(4);
    ll2.insert(2);
    ll2.insert(3);
    ll2.insert(1);

    const mergeRes1 = mergeLists(ll1, ll2);

    expect(mergeRes1.head.value).toEqual(5);
    expect(mergeRes1.head.next.value).toEqual(1);
    expect(mergeRes1.head.next.next.value).toEqual(3);
    expect(mergeRes1.head.next.next.next.value).toEqual(2);
    expect(mergeRes1.head.next.next.next.next.value).toEqual(4);
    expect(mergeRes1.head.next.next.next.next.next.value).toEqual(6);

    ll2 = new LinkedList();
    ll1 = new LinkedList();

    ll1.insert(5);
    ll1.insert(4);

    ll2.insert(1);

    const mergeRes2 = mergeLists(ll1, ll2);

    expect(mergeRes2.head.value).toEqual(4);
    expect(mergeRes2.head.next.value).toEqual(1);
    expect(mergeRes2.head.next.next.value).toEqual(5);
  });
});
