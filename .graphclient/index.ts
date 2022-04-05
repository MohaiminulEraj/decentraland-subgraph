// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLSchema, ExecutionResult } from 'graphql';
import { DocumentNode } from 'graphql';
import { compileQuery, isCompiledQuery, CompilerOptions } from 'graphql-jit';
import { AggregateError, isAsyncIterable, mapAsyncIterator } from '@graphql-tools/utils';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Decentraland = {
  id: Scalars['ID'];
  landCount: Scalars['Int'];
  estateCount: Scalars['Int'];
};

export type Decentraland_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  landCount?: InputMaybe<Scalars['Int']>;
  landCount_not?: InputMaybe<Scalars['Int']>;
  landCount_gt?: InputMaybe<Scalars['Int']>;
  landCount_lt?: InputMaybe<Scalars['Int']>;
  landCount_gte?: InputMaybe<Scalars['Int']>;
  landCount_lte?: InputMaybe<Scalars['Int']>;
  landCount_in?: InputMaybe<Array<Scalars['Int']>>;
  landCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  estateCount?: InputMaybe<Scalars['Int']>;
  estateCount_not?: InputMaybe<Scalars['Int']>;
  estateCount_gt?: InputMaybe<Scalars['Int']>;
  estateCount_lt?: InputMaybe<Scalars['Int']>;
  estateCount_gte?: InputMaybe<Scalars['Int']>;
  estateCount_lte?: InputMaybe<Scalars['Int']>;
  estateCount_in?: InputMaybe<Array<Scalars['Int']>>;
  estateCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export type Decentraland_orderBy =
  | 'id'
  | 'landCount'
  | 'estateCount';

export type Estate = {
  id: Scalars['ID'];
  owner: User;
  operator?: Maybe<Scalars['Bytes']>;
  metaData?: Maybe<Scalars['String']>;
  land?: Maybe<Array<Scalars['BigInt']>>;
  orders?: Maybe<Array<Order>>;
  size?: Maybe<Scalars['Int']>;
  createTransaction?: Maybe<Scalars['Bytes']>;
  updatedAt: Scalars['BigInt'];
  activeOrder?: Maybe<Order>;
  orderOwner?: Maybe<Scalars['Bytes']>;
  orderPrice?: Maybe<Scalars['BigInt']>;
};


export type EstateordersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Order_filter>;
};

export type Estate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  metaData?: InputMaybe<Scalars['String']>;
  metaData_not?: InputMaybe<Scalars['String']>;
  metaData_gt?: InputMaybe<Scalars['String']>;
  metaData_lt?: InputMaybe<Scalars['String']>;
  metaData_gte?: InputMaybe<Scalars['String']>;
  metaData_lte?: InputMaybe<Scalars['String']>;
  metaData_in?: InputMaybe<Array<Scalars['String']>>;
  metaData_not_in?: InputMaybe<Array<Scalars['String']>>;
  metaData_contains?: InputMaybe<Scalars['String']>;
  metaData_not_contains?: InputMaybe<Scalars['String']>;
  metaData_starts_with?: InputMaybe<Scalars['String']>;
  metaData_not_starts_with?: InputMaybe<Scalars['String']>;
  metaData_ends_with?: InputMaybe<Scalars['String']>;
  metaData_not_ends_with?: InputMaybe<Scalars['String']>;
  land?: InputMaybe<Array<Scalars['BigInt']>>;
  land_not?: InputMaybe<Array<Scalars['BigInt']>>;
  land_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  land_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  size?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<Scalars['Int']>>;
  size_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createTransaction?: InputMaybe<Scalars['Bytes']>;
  createTransaction_not?: InputMaybe<Scalars['Bytes']>;
  createTransaction_in?: InputMaybe<Array<Scalars['Bytes']>>;
  createTransaction_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  createTransaction_contains?: InputMaybe<Scalars['Bytes']>;
  createTransaction_not_contains?: InputMaybe<Scalars['Bytes']>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  activeOrder?: InputMaybe<Scalars['String']>;
  activeOrder_not?: InputMaybe<Scalars['String']>;
  activeOrder_gt?: InputMaybe<Scalars['String']>;
  activeOrder_lt?: InputMaybe<Scalars['String']>;
  activeOrder_gte?: InputMaybe<Scalars['String']>;
  activeOrder_lte?: InputMaybe<Scalars['String']>;
  activeOrder_in?: InputMaybe<Array<Scalars['String']>>;
  activeOrder_not_in?: InputMaybe<Array<Scalars['String']>>;
  activeOrder_contains?: InputMaybe<Scalars['String']>;
  activeOrder_not_contains?: InputMaybe<Scalars['String']>;
  activeOrder_starts_with?: InputMaybe<Scalars['String']>;
  activeOrder_not_starts_with?: InputMaybe<Scalars['String']>;
  activeOrder_ends_with?: InputMaybe<Scalars['String']>;
  activeOrder_not_ends_with?: InputMaybe<Scalars['String']>;
  orderOwner?: InputMaybe<Scalars['Bytes']>;
  orderOwner_not?: InputMaybe<Scalars['Bytes']>;
  orderOwner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  orderOwner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  orderOwner_contains?: InputMaybe<Scalars['Bytes']>;
  orderOwner_not_contains?: InputMaybe<Scalars['Bytes']>;
  orderPrice?: InputMaybe<Scalars['BigInt']>;
  orderPrice_not?: InputMaybe<Scalars['BigInt']>;
  orderPrice_gt?: InputMaybe<Scalars['BigInt']>;
  orderPrice_lt?: InputMaybe<Scalars['BigInt']>;
  orderPrice_gte?: InputMaybe<Scalars['BigInt']>;
  orderPrice_lte?: InputMaybe<Scalars['BigInt']>;
  orderPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  orderPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Estate_orderBy =
  | 'id'
  | 'owner'
  | 'operator'
  | 'metaData'
  | 'land'
  | 'orders'
  | 'size'
  | 'createTransaction'
  | 'updatedAt'
  | 'activeOrder'
  | 'orderOwner'
  | 'orderPrice';

export type Invite = {
  id: Scalars['ID'];
  inviteBalance: Scalars['BigInt'];
  invites: Array<Scalars['BigInt']>;
};

export type Invite_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  inviteBalance?: InputMaybe<Scalars['BigInt']>;
  inviteBalance_not?: InputMaybe<Scalars['BigInt']>;
  inviteBalance_gt?: InputMaybe<Scalars['BigInt']>;
  inviteBalance_lt?: InputMaybe<Scalars['BigInt']>;
  inviteBalance_gte?: InputMaybe<Scalars['BigInt']>;
  inviteBalance_lte?: InputMaybe<Scalars['BigInt']>;
  inviteBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inviteBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  invites?: InputMaybe<Array<Scalars['BigInt']>>;
  invites_not?: InputMaybe<Array<Scalars['BigInt']>>;
  invites_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  invites_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Invite_orderBy =
  | 'id'
  | 'inviteBalance'
  | 'invites';

export type Mortgage = {
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  createdAt: Scalars['BigInt'];
  startedAt?: Maybe<Scalars['BigInt']>;
  lastUpdatedAt: Scalars['BigInt'];
  status: MortgageStatus;
  borrower: User;
  rcnEngine: Scalars['Bytes'];
  loan_id: Scalars['BigInt'];
  landMarket: Scalars['Bytes'];
  landID: Scalars['BigInt'];
  deposit: Scalars['BigInt'];
  tokenConverter: Scalars['Bytes'];
  landCost: Scalars['BigInt'];
  parcel?: Maybe<Parcel>;
  estate?: Maybe<Estate>;
  lender: Scalars['Bytes'];
  loanAmount: Scalars['BigInt'];
  dueTime: Scalars['Int'];
};

export type MortgageStatus =
  | 'pending'
  | 'cancelled'
  | 'ongoing'
  | 'paid'
  | 'defaulted';

export type Mortgage_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedAt?: InputMaybe<Scalars['BigInt']>;
  startedAt_not?: InputMaybe<Scalars['BigInt']>;
  startedAt_gt?: InputMaybe<Scalars['BigInt']>;
  startedAt_lt?: InputMaybe<Scalars['BigInt']>;
  startedAt_gte?: InputMaybe<Scalars['BigInt']>;
  startedAt_lte?: InputMaybe<Scalars['BigInt']>;
  startedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<MortgageStatus>;
  status_not?: InputMaybe<MortgageStatus>;
  status_in?: InputMaybe<Array<MortgageStatus>>;
  status_not_in?: InputMaybe<Array<MortgageStatus>>;
  borrower?: InputMaybe<Scalars['String']>;
  borrower_not?: InputMaybe<Scalars['String']>;
  borrower_gt?: InputMaybe<Scalars['String']>;
  borrower_lt?: InputMaybe<Scalars['String']>;
  borrower_gte?: InputMaybe<Scalars['String']>;
  borrower_lte?: InputMaybe<Scalars['String']>;
  borrower_in?: InputMaybe<Array<Scalars['String']>>;
  borrower_not_in?: InputMaybe<Array<Scalars['String']>>;
  borrower_contains?: InputMaybe<Scalars['String']>;
  borrower_not_contains?: InputMaybe<Scalars['String']>;
  borrower_starts_with?: InputMaybe<Scalars['String']>;
  borrower_not_starts_with?: InputMaybe<Scalars['String']>;
  borrower_ends_with?: InputMaybe<Scalars['String']>;
  borrower_not_ends_with?: InputMaybe<Scalars['String']>;
  rcnEngine?: InputMaybe<Scalars['Bytes']>;
  rcnEngine_not?: InputMaybe<Scalars['Bytes']>;
  rcnEngine_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rcnEngine_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rcnEngine_contains?: InputMaybe<Scalars['Bytes']>;
  rcnEngine_not_contains?: InputMaybe<Scalars['Bytes']>;
  loan_id?: InputMaybe<Scalars['BigInt']>;
  loan_id_not?: InputMaybe<Scalars['BigInt']>;
  loan_id_gt?: InputMaybe<Scalars['BigInt']>;
  loan_id_lt?: InputMaybe<Scalars['BigInt']>;
  loan_id_gte?: InputMaybe<Scalars['BigInt']>;
  loan_id_lte?: InputMaybe<Scalars['BigInt']>;
  loan_id_in?: InputMaybe<Array<Scalars['BigInt']>>;
  loan_id_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  landMarket?: InputMaybe<Scalars['Bytes']>;
  landMarket_not?: InputMaybe<Scalars['Bytes']>;
  landMarket_in?: InputMaybe<Array<Scalars['Bytes']>>;
  landMarket_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  landMarket_contains?: InputMaybe<Scalars['Bytes']>;
  landMarket_not_contains?: InputMaybe<Scalars['Bytes']>;
  landID?: InputMaybe<Scalars['BigInt']>;
  landID_not?: InputMaybe<Scalars['BigInt']>;
  landID_gt?: InputMaybe<Scalars['BigInt']>;
  landID_lt?: InputMaybe<Scalars['BigInt']>;
  landID_gte?: InputMaybe<Scalars['BigInt']>;
  landID_lte?: InputMaybe<Scalars['BigInt']>;
  landID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  landID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenConverter?: InputMaybe<Scalars['Bytes']>;
  tokenConverter_not?: InputMaybe<Scalars['Bytes']>;
  tokenConverter_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenConverter_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenConverter_contains?: InputMaybe<Scalars['Bytes']>;
  tokenConverter_not_contains?: InputMaybe<Scalars['Bytes']>;
  landCost?: InputMaybe<Scalars['BigInt']>;
  landCost_not?: InputMaybe<Scalars['BigInt']>;
  landCost_gt?: InputMaybe<Scalars['BigInt']>;
  landCost_lt?: InputMaybe<Scalars['BigInt']>;
  landCost_gte?: InputMaybe<Scalars['BigInt']>;
  landCost_lte?: InputMaybe<Scalars['BigInt']>;
  landCost_in?: InputMaybe<Array<Scalars['BigInt']>>;
  landCost_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  parcel?: InputMaybe<Scalars['String']>;
  parcel_not?: InputMaybe<Scalars['String']>;
  parcel_gt?: InputMaybe<Scalars['String']>;
  parcel_lt?: InputMaybe<Scalars['String']>;
  parcel_gte?: InputMaybe<Scalars['String']>;
  parcel_lte?: InputMaybe<Scalars['String']>;
  parcel_in?: InputMaybe<Array<Scalars['String']>>;
  parcel_not_in?: InputMaybe<Array<Scalars['String']>>;
  parcel_contains?: InputMaybe<Scalars['String']>;
  parcel_not_contains?: InputMaybe<Scalars['String']>;
  parcel_starts_with?: InputMaybe<Scalars['String']>;
  parcel_not_starts_with?: InputMaybe<Scalars['String']>;
  parcel_ends_with?: InputMaybe<Scalars['String']>;
  parcel_not_ends_with?: InputMaybe<Scalars['String']>;
  estate?: InputMaybe<Scalars['String']>;
  estate_not?: InputMaybe<Scalars['String']>;
  estate_gt?: InputMaybe<Scalars['String']>;
  estate_lt?: InputMaybe<Scalars['String']>;
  estate_gte?: InputMaybe<Scalars['String']>;
  estate_lte?: InputMaybe<Scalars['String']>;
  estate_in?: InputMaybe<Array<Scalars['String']>>;
  estate_not_in?: InputMaybe<Array<Scalars['String']>>;
  estate_contains?: InputMaybe<Scalars['String']>;
  estate_not_contains?: InputMaybe<Scalars['String']>;
  estate_starts_with?: InputMaybe<Scalars['String']>;
  estate_not_starts_with?: InputMaybe<Scalars['String']>;
  estate_ends_with?: InputMaybe<Scalars['String']>;
  estate_not_ends_with?: InputMaybe<Scalars['String']>;
  lender?: InputMaybe<Scalars['Bytes']>;
  lender_not?: InputMaybe<Scalars['Bytes']>;
  lender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lender_contains?: InputMaybe<Scalars['Bytes']>;
  lender_not_contains?: InputMaybe<Scalars['Bytes']>;
  loanAmount?: InputMaybe<Scalars['BigInt']>;
  loanAmount_not?: InputMaybe<Scalars['BigInt']>;
  loanAmount_gt?: InputMaybe<Scalars['BigInt']>;
  loanAmount_lt?: InputMaybe<Scalars['BigInt']>;
  loanAmount_gte?: InputMaybe<Scalars['BigInt']>;
  loanAmount_lte?: InputMaybe<Scalars['BigInt']>;
  loanAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  loanAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dueTime?: InputMaybe<Scalars['Int']>;
  dueTime_not?: InputMaybe<Scalars['Int']>;
  dueTime_gt?: InputMaybe<Scalars['Int']>;
  dueTime_lt?: InputMaybe<Scalars['Int']>;
  dueTime_gte?: InputMaybe<Scalars['Int']>;
  dueTime_lte?: InputMaybe<Scalars['Int']>;
  dueTime_in?: InputMaybe<Array<Scalars['Int']>>;
  dueTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mortgage_orderBy =
  | 'id'
  | 'txHash'
  | 'createdAt'
  | 'startedAt'
  | 'lastUpdatedAt'
  | 'status'
  | 'borrower'
  | 'rcnEngine'
  | 'loan_id'
  | 'landMarket'
  | 'landID'
  | 'deposit'
  | 'tokenConverter'
  | 'landCost'
  | 'parcel'
  | 'estate'
  | 'lender'
  | 'loanAmount'
  | 'dueTime';

export type Order = {
  id: Scalars['ID'];
  type: OrderType;
  parcel?: Maybe<Parcel>;
  estate?: Maybe<Estate>;
  txHash: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  price: Scalars['BigInt'];
  status: OrderStatus;
  buyer?: Maybe<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  expiresAt: Scalars['BigInt'];
  timeCreated: Scalars['BigInt'];
  timeUpdatedAt: Scalars['BigInt'];
  marketplace: Scalars['Bytes'];
  nftAddress?: Maybe<Scalars['Bytes']>;
};

export type OrderDirection =
  | 'asc'
  | 'desc';

export type OrderStatus =
  | 'open'
  | 'sold'
  | 'cancelled';

export type OrderType =
  | 'parcel'
  | 'estate';

export type Order_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<OrderType>;
  type_not?: InputMaybe<OrderType>;
  type_in?: InputMaybe<Array<OrderType>>;
  type_not_in?: InputMaybe<Array<OrderType>>;
  parcel?: InputMaybe<Scalars['String']>;
  parcel_not?: InputMaybe<Scalars['String']>;
  parcel_gt?: InputMaybe<Scalars['String']>;
  parcel_lt?: InputMaybe<Scalars['String']>;
  parcel_gte?: InputMaybe<Scalars['String']>;
  parcel_lte?: InputMaybe<Scalars['String']>;
  parcel_in?: InputMaybe<Array<Scalars['String']>>;
  parcel_not_in?: InputMaybe<Array<Scalars['String']>>;
  parcel_contains?: InputMaybe<Scalars['String']>;
  parcel_not_contains?: InputMaybe<Scalars['String']>;
  parcel_starts_with?: InputMaybe<Scalars['String']>;
  parcel_not_starts_with?: InputMaybe<Scalars['String']>;
  parcel_ends_with?: InputMaybe<Scalars['String']>;
  parcel_not_ends_with?: InputMaybe<Scalars['String']>;
  estate?: InputMaybe<Scalars['String']>;
  estate_not?: InputMaybe<Scalars['String']>;
  estate_gt?: InputMaybe<Scalars['String']>;
  estate_lt?: InputMaybe<Scalars['String']>;
  estate_gte?: InputMaybe<Scalars['String']>;
  estate_lte?: InputMaybe<Scalars['String']>;
  estate_in?: InputMaybe<Array<Scalars['String']>>;
  estate_not_in?: InputMaybe<Array<Scalars['String']>>;
  estate_contains?: InputMaybe<Scalars['String']>;
  estate_not_contains?: InputMaybe<Scalars['String']>;
  estate_starts_with?: InputMaybe<Scalars['String']>;
  estate_not_starts_with?: InputMaybe<Scalars['String']>;
  estate_ends_with?: InputMaybe<Scalars['String']>;
  estate_not_ends_with?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<OrderStatus>;
  status_not?: InputMaybe<OrderStatus>;
  status_in?: InputMaybe<Array<OrderStatus>>;
  status_not_in?: InputMaybe<Array<OrderStatus>>;
  buyer?: InputMaybe<Scalars['Bytes']>;
  buyer_not?: InputMaybe<Scalars['Bytes']>;
  buyer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  buyer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  buyer_contains?: InputMaybe<Scalars['Bytes']>;
  buyer_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiresAt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_not?: InputMaybe<Scalars['BigInt']>;
  expiresAt_gt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_lt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_gte?: InputMaybe<Scalars['BigInt']>;
  expiresAt_lte?: InputMaybe<Scalars['BigInt']>;
  expiresAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiresAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timeCreated?: InputMaybe<Scalars['BigInt']>;
  timeCreated_not?: InputMaybe<Scalars['BigInt']>;
  timeCreated_gt?: InputMaybe<Scalars['BigInt']>;
  timeCreated_lt?: InputMaybe<Scalars['BigInt']>;
  timeCreated_gte?: InputMaybe<Scalars['BigInt']>;
  timeCreated_lte?: InputMaybe<Scalars['BigInt']>;
  timeCreated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timeCreated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timeUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  timeUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  timeUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  timeUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  timeUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  timeUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  timeUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timeUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  marketplace?: InputMaybe<Scalars['Bytes']>;
  marketplace_not?: InputMaybe<Scalars['Bytes']>;
  marketplace_in?: InputMaybe<Array<Scalars['Bytes']>>;
  marketplace_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  marketplace_contains?: InputMaybe<Scalars['Bytes']>;
  marketplace_not_contains?: InputMaybe<Scalars['Bytes']>;
  nftAddress?: InputMaybe<Scalars['Bytes']>;
  nftAddress_not?: InputMaybe<Scalars['Bytes']>;
  nftAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  nftAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  nftAddress_contains?: InputMaybe<Scalars['Bytes']>;
  nftAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
};

export type Order_orderBy =
  | 'id'
  | 'type'
  | 'parcel'
  | 'estate'
  | 'txHash'
  | 'owner'
  | 'price'
  | 'status'
  | 'buyer'
  | 'blockNumber'
  | 'expiresAt'
  | 'timeCreated'
  | 'timeUpdatedAt'
  | 'marketplace'
  | 'nftAddress';

export type Parcel = {
  id: Scalars['ID'];
  idNumber: Scalars['BigInt'];
  x: Scalars['BigInt'];
  y: Scalars['BigInt'];
  estate?: Maybe<Estate>;
  owner: User;
  data?: Maybe<ParcelData>;
  orderOwner?: Maybe<Scalars['Bytes']>;
  orderPrice?: Maybe<Scalars['BigInt']>;
  activeOrder?: Maybe<Order>;
  orders?: Maybe<Array<Order>>;
  updatedAt: Scalars['BigInt'];
  operators?: Maybe<Array<Scalars['Bytes']>>;
};


export type ParcelordersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Order_filter>;
};

export type ParcelData = {
  id: Scalars['ID'];
  parcel: Parcel;
  version?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  ipns?: Maybe<Scalars['String']>;
};

export type ParcelData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  parcel?: InputMaybe<Scalars['String']>;
  parcel_not?: InputMaybe<Scalars['String']>;
  parcel_gt?: InputMaybe<Scalars['String']>;
  parcel_lt?: InputMaybe<Scalars['String']>;
  parcel_gte?: InputMaybe<Scalars['String']>;
  parcel_lte?: InputMaybe<Scalars['String']>;
  parcel_in?: InputMaybe<Array<Scalars['String']>>;
  parcel_not_in?: InputMaybe<Array<Scalars['String']>>;
  parcel_contains?: InputMaybe<Scalars['String']>;
  parcel_not_contains?: InputMaybe<Scalars['String']>;
  parcel_starts_with?: InputMaybe<Scalars['String']>;
  parcel_not_starts_with?: InputMaybe<Scalars['String']>;
  parcel_ends_with?: InputMaybe<Scalars['String']>;
  parcel_not_ends_with?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
  version_not?: InputMaybe<Scalars['String']>;
  version_gt?: InputMaybe<Scalars['String']>;
  version_lt?: InputMaybe<Scalars['String']>;
  version_gte?: InputMaybe<Scalars['String']>;
  version_lte?: InputMaybe<Scalars['String']>;
  version_in?: InputMaybe<Array<Scalars['String']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']>>;
  version_contains?: InputMaybe<Scalars['String']>;
  version_not_contains?: InputMaybe<Scalars['String']>;
  version_starts_with?: InputMaybe<Scalars['String']>;
  version_not_starts_with?: InputMaybe<Scalars['String']>;
  version_ends_with?: InputMaybe<Scalars['String']>;
  version_not_ends_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  ipns?: InputMaybe<Scalars['String']>;
  ipns_not?: InputMaybe<Scalars['String']>;
  ipns_gt?: InputMaybe<Scalars['String']>;
  ipns_lt?: InputMaybe<Scalars['String']>;
  ipns_gte?: InputMaybe<Scalars['String']>;
  ipns_lte?: InputMaybe<Scalars['String']>;
  ipns_in?: InputMaybe<Array<Scalars['String']>>;
  ipns_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipns_contains?: InputMaybe<Scalars['String']>;
  ipns_not_contains?: InputMaybe<Scalars['String']>;
  ipns_starts_with?: InputMaybe<Scalars['String']>;
  ipns_not_starts_with?: InputMaybe<Scalars['String']>;
  ipns_ends_with?: InputMaybe<Scalars['String']>;
  ipns_not_ends_with?: InputMaybe<Scalars['String']>;
};

export type ParcelData_orderBy =
  | 'id'
  | 'parcel'
  | 'version'
  | 'name'
  | 'description'
  | 'ipns';

export type Parcel_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  idNumber?: InputMaybe<Scalars['BigInt']>;
  idNumber_not?: InputMaybe<Scalars['BigInt']>;
  idNumber_gt?: InputMaybe<Scalars['BigInt']>;
  idNumber_lt?: InputMaybe<Scalars['BigInt']>;
  idNumber_gte?: InputMaybe<Scalars['BigInt']>;
  idNumber_lte?: InputMaybe<Scalars['BigInt']>;
  idNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  idNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  x?: InputMaybe<Scalars['BigInt']>;
  x_not?: InputMaybe<Scalars['BigInt']>;
  x_gt?: InputMaybe<Scalars['BigInt']>;
  x_lt?: InputMaybe<Scalars['BigInt']>;
  x_gte?: InputMaybe<Scalars['BigInt']>;
  x_lte?: InputMaybe<Scalars['BigInt']>;
  x_in?: InputMaybe<Array<Scalars['BigInt']>>;
  x_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  y?: InputMaybe<Scalars['BigInt']>;
  y_not?: InputMaybe<Scalars['BigInt']>;
  y_gt?: InputMaybe<Scalars['BigInt']>;
  y_lt?: InputMaybe<Scalars['BigInt']>;
  y_gte?: InputMaybe<Scalars['BigInt']>;
  y_lte?: InputMaybe<Scalars['BigInt']>;
  y_in?: InputMaybe<Array<Scalars['BigInt']>>;
  y_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  estate?: InputMaybe<Scalars['String']>;
  estate_not?: InputMaybe<Scalars['String']>;
  estate_gt?: InputMaybe<Scalars['String']>;
  estate_lt?: InputMaybe<Scalars['String']>;
  estate_gte?: InputMaybe<Scalars['String']>;
  estate_lte?: InputMaybe<Scalars['String']>;
  estate_in?: InputMaybe<Array<Scalars['String']>>;
  estate_not_in?: InputMaybe<Array<Scalars['String']>>;
  estate_contains?: InputMaybe<Scalars['String']>;
  estate_not_contains?: InputMaybe<Scalars['String']>;
  estate_starts_with?: InputMaybe<Scalars['String']>;
  estate_not_starts_with?: InputMaybe<Scalars['String']>;
  estate_ends_with?: InputMaybe<Scalars['String']>;
  estate_not_ends_with?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['String']>;
  data_not?: InputMaybe<Scalars['String']>;
  data_gt?: InputMaybe<Scalars['String']>;
  data_lt?: InputMaybe<Scalars['String']>;
  data_gte?: InputMaybe<Scalars['String']>;
  data_lte?: InputMaybe<Scalars['String']>;
  data_in?: InputMaybe<Array<Scalars['String']>>;
  data_not_in?: InputMaybe<Array<Scalars['String']>>;
  data_contains?: InputMaybe<Scalars['String']>;
  data_not_contains?: InputMaybe<Scalars['String']>;
  data_starts_with?: InputMaybe<Scalars['String']>;
  data_not_starts_with?: InputMaybe<Scalars['String']>;
  data_ends_with?: InputMaybe<Scalars['String']>;
  data_not_ends_with?: InputMaybe<Scalars['String']>;
  orderOwner?: InputMaybe<Scalars['Bytes']>;
  orderOwner_not?: InputMaybe<Scalars['Bytes']>;
  orderOwner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  orderOwner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  orderOwner_contains?: InputMaybe<Scalars['Bytes']>;
  orderOwner_not_contains?: InputMaybe<Scalars['Bytes']>;
  orderPrice?: InputMaybe<Scalars['BigInt']>;
  orderPrice_not?: InputMaybe<Scalars['BigInt']>;
  orderPrice_gt?: InputMaybe<Scalars['BigInt']>;
  orderPrice_lt?: InputMaybe<Scalars['BigInt']>;
  orderPrice_gte?: InputMaybe<Scalars['BigInt']>;
  orderPrice_lte?: InputMaybe<Scalars['BigInt']>;
  orderPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  orderPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  activeOrder?: InputMaybe<Scalars['String']>;
  activeOrder_not?: InputMaybe<Scalars['String']>;
  activeOrder_gt?: InputMaybe<Scalars['String']>;
  activeOrder_lt?: InputMaybe<Scalars['String']>;
  activeOrder_gte?: InputMaybe<Scalars['String']>;
  activeOrder_lte?: InputMaybe<Scalars['String']>;
  activeOrder_in?: InputMaybe<Array<Scalars['String']>>;
  activeOrder_not_in?: InputMaybe<Array<Scalars['String']>>;
  activeOrder_contains?: InputMaybe<Scalars['String']>;
  activeOrder_not_contains?: InputMaybe<Scalars['String']>;
  activeOrder_starts_with?: InputMaybe<Scalars['String']>;
  activeOrder_not_starts_with?: InputMaybe<Scalars['String']>;
  activeOrder_ends_with?: InputMaybe<Scalars['String']>;
  activeOrder_not_ends_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  operators?: InputMaybe<Array<Scalars['Bytes']>>;
  operators_not?: InputMaybe<Array<Scalars['Bytes']>>;
  operators_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  operators_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
};

export type Parcel_orderBy =
  | 'id'
  | 'idNumber'
  | 'x'
  | 'y'
  | 'estate'
  | 'owner'
  | 'data'
  | 'orderOwner'
  | 'orderPrice'
  | 'activeOrder'
  | 'orders'
  | 'updatedAt'
  | 'operators';

export type Query = {
  decentraland?: Maybe<Decentraland>;
  decentralands: Array<Decentraland>;
  parcel?: Maybe<Parcel>;
  parcels: Array<Parcel>;
  parcelData?: Maybe<ParcelData>;
  parcelDatas: Array<ParcelData>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  estate?: Maybe<Estate>;
  estates: Array<Estate>;
  mortgage?: Maybe<Mortgage>;
  mortgages: Array<Mortgage>;
  invite?: Maybe<Invite>;
  invites: Array<Invite>;
  user?: Maybe<User>;
  users: Array<User>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerydecentralandArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydecentralandsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Decentraland_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Decentraland_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryparcelArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryparcelsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Parcel_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Parcel_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryparcelDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryparcelDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ParcelData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ParcelData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryorderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryordersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Order_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryestateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryestatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Estate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Estate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymortgageArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymortgagesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mortgage_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mortgage_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinviteArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinvitesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Invite_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Invite_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  decentraland?: Maybe<Decentraland>;
  decentralands: Array<Decentraland>;
  parcel?: Maybe<Parcel>;
  parcels: Array<Parcel>;
  parcelData?: Maybe<ParcelData>;
  parcelDatas: Array<ParcelData>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  estate?: Maybe<Estate>;
  estates: Array<Estate>;
  mortgage?: Maybe<Mortgage>;
  mortgages: Array<Mortgage>;
  invite?: Maybe<Invite>;
  invites: Array<Invite>;
  user?: Maybe<User>;
  users: Array<User>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptiondecentralandArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondecentralandsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Decentraland_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Decentraland_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionparcelArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionparcelsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Parcel_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Parcel_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionparcelDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionparcelDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ParcelData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ParcelData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionorderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionordersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Order_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionestateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionestatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Estate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Estate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmortgageArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmortgagesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mortgage_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mortgage_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninviteArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninvitesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Invite_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Invite_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type User = {
  id: Scalars['ID'];
  parcels?: Maybe<Array<Parcel>>;
  estates?: Maybe<Array<Estate>>;
  mana?: Maybe<Scalars['BigInt']>;
  mortgages?: Maybe<Array<Mortgage>>;
};


export type UserparcelsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Parcel_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Parcel_filter>;
};


export type UserestatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Estate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Estate_filter>;
};


export type UsermortgagesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mortgage_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mortgage_filter>;
};

export type User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  mana?: InputMaybe<Scalars['BigInt']>;
  mana_not?: InputMaybe<Scalars['BigInt']>;
  mana_gt?: InputMaybe<Scalars['BigInt']>;
  mana_lt?: InputMaybe<Scalars['BigInt']>;
  mana_gte?: InputMaybe<Scalars['BigInt']>;
  mana_lte?: InputMaybe<Scalars['BigInt']>;
  mana_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mana_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type User_orderBy =
  | 'id'
  | 'parcels'
  | 'estates'
  | 'mana'
  | 'mortgages';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Block_height: Block_height;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Decentraland: ResolverTypeWrapper<Decentraland>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Decentraland_filter: Decentraland_filter;
  Decentraland_orderBy: Decentraland_orderBy;
  Estate: ResolverTypeWrapper<Estate>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Estate_filter: Estate_filter;
  Estate_orderBy: Estate_orderBy;
  Invite: ResolverTypeWrapper<Invite>;
  Invite_filter: Invite_filter;
  Invite_orderBy: Invite_orderBy;
  Mortgage: ResolverTypeWrapper<Mortgage>;
  MortgageStatus: MortgageStatus;
  Mortgage_filter: Mortgage_filter;
  Mortgage_orderBy: Mortgage_orderBy;
  Order: ResolverTypeWrapper<Order>;
  OrderDirection: OrderDirection;
  OrderStatus: OrderStatus;
  OrderType: OrderType;
  Order_filter: Order_filter;
  Order_orderBy: Order_orderBy;
  Parcel: ResolverTypeWrapper<Parcel>;
  ParcelData: ResolverTypeWrapper<ParcelData>;
  ParcelData_filter: ParcelData_filter;
  ParcelData_orderBy: ParcelData_orderBy;
  Parcel_filter: Parcel_filter;
  Parcel_orderBy: Parcel_orderBy;
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  User_filter: User_filter;
  User_orderBy: User_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  Block_height: Block_height;
  Int: Scalars['Int'];
  Bytes: Scalars['Bytes'];
  Decentraland: Decentraland;
  ID: Scalars['ID'];
  Decentraland_filter: Decentraland_filter;
  Estate: Estate;
  String: Scalars['String'];
  Estate_filter: Estate_filter;
  Invite: Invite;
  Invite_filter: Invite_filter;
  Mortgage: Mortgage;
  Mortgage_filter: Mortgage_filter;
  Order: Order;
  Order_filter: Order_filter;
  Parcel: Parcel;
  ParcelData: ParcelData;
  ParcelData_filter: ParcelData_filter;
  Parcel_filter: Parcel_filter;
  Query: {};
  Subscription: {};
  User: User;
  User_filter: User_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
  Boolean: Scalars['Boolean'];
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field?: Maybe<Scalars['String']>;
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id?: Maybe<Scalars['String']>;
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type DecentralandResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Decentraland'] = ResolversParentTypes['Decentraland']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  landCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  estateCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EstateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Estate'] = ResolversParentTypes['Estate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  operator?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  metaData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  land?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  orders?: Resolver<Maybe<Array<ResolversTypes['Order']>>, ParentType, ContextType, RequireFields<EstateordersArgs, 'skip' | 'first'>>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createTransaction?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  activeOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  orderOwner?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  orderPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InviteResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Invite'] = ResolversParentTypes['Invite']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  inviteBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  invites?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MortgageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mortgage'] = ResolversParentTypes['Mortgage']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  startedAt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  lastUpdatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['MortgageStatus'], ParentType, ContextType>;
  borrower?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  rcnEngine?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  loan_id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  landMarket?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  landID?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  deposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenConverter?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  landCost?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  parcel?: Resolver<Maybe<ResolversTypes['Parcel']>, ParentType, ContextType>;
  estate?: Resolver<Maybe<ResolversTypes['Estate']>, ParentType, ContextType>;
  lender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  loanAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dueTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['OrderType'], ParentType, ContextType>;
  parcel?: Resolver<Maybe<ResolversTypes['Parcel']>, ParentType, ContextType>;
  estate?: Resolver<Maybe<ResolversTypes['Estate']>, ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  buyer?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  expiresAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timeCreated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timeUpdatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  marketplace?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  nftAddress?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ParcelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Parcel'] = ResolversParentTypes['Parcel']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  idNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  x?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  estate?: Resolver<Maybe<ResolversTypes['Estate']>, ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['ParcelData']>, ParentType, ContextType>;
  orderOwner?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  orderPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  activeOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  orders?: Resolver<Maybe<Array<ResolversTypes['Order']>>, ParentType, ContextType, RequireFields<ParcelordersArgs, 'skip' | 'first'>>;
  updatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  operators?: Resolver<Maybe<Array<ResolversTypes['Bytes']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ParcelDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ParcelData'] = ResolversParentTypes['ParcelData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parcel?: Resolver<ResolversTypes['Parcel'], ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipns?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  decentraland?: Resolver<Maybe<ResolversTypes['Decentraland']>, ParentType, ContextType, RequireFields<QuerydecentralandArgs, 'id' | 'subgraphError'>>;
  decentralands?: Resolver<Array<ResolversTypes['Decentraland']>, ParentType, ContextType, RequireFields<QuerydecentralandsArgs, 'skip' | 'first' | 'subgraphError'>>;
  parcel?: Resolver<Maybe<ResolversTypes['Parcel']>, ParentType, ContextType, RequireFields<QueryparcelArgs, 'id' | 'subgraphError'>>;
  parcels?: Resolver<Array<ResolversTypes['Parcel']>, ParentType, ContextType, RequireFields<QueryparcelsArgs, 'skip' | 'first' | 'subgraphError'>>;
  parcelData?: Resolver<Maybe<ResolversTypes['ParcelData']>, ParentType, ContextType, RequireFields<QueryparcelDataArgs, 'id' | 'subgraphError'>>;
  parcelDatas?: Resolver<Array<ResolversTypes['ParcelData']>, ParentType, ContextType, RequireFields<QueryparcelDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryorderArgs, 'id' | 'subgraphError'>>;
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryordersArgs, 'skip' | 'first' | 'subgraphError'>>;
  estate?: Resolver<Maybe<ResolversTypes['Estate']>, ParentType, ContextType, RequireFields<QueryestateArgs, 'id' | 'subgraphError'>>;
  estates?: Resolver<Array<ResolversTypes['Estate']>, ParentType, ContextType, RequireFields<QueryestatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  mortgage?: Resolver<Maybe<ResolversTypes['Mortgage']>, ParentType, ContextType, RequireFields<QuerymortgageArgs, 'id' | 'subgraphError'>>;
  mortgages?: Resolver<Array<ResolversTypes['Mortgage']>, ParentType, ContextType, RequireFields<QuerymortgagesArgs, 'skip' | 'first' | 'subgraphError'>>;
  invite?: Resolver<Maybe<ResolversTypes['Invite']>, ParentType, ContextType, RequireFields<QueryinviteArgs, 'id' | 'subgraphError'>>;
  invites?: Resolver<Array<ResolversTypes['Invite']>, ParentType, ContextType, RequireFields<QueryinvitesArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id' | 'subgraphError'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  decentraland?: SubscriptionResolver<Maybe<ResolversTypes['Decentraland']>, "decentraland", ParentType, ContextType, RequireFields<SubscriptiondecentralandArgs, 'id' | 'subgraphError'>>;
  decentralands?: SubscriptionResolver<Array<ResolversTypes['Decentraland']>, "decentralands", ParentType, ContextType, RequireFields<SubscriptiondecentralandsArgs, 'skip' | 'first' | 'subgraphError'>>;
  parcel?: SubscriptionResolver<Maybe<ResolversTypes['Parcel']>, "parcel", ParentType, ContextType, RequireFields<SubscriptionparcelArgs, 'id' | 'subgraphError'>>;
  parcels?: SubscriptionResolver<Array<ResolversTypes['Parcel']>, "parcels", ParentType, ContextType, RequireFields<SubscriptionparcelsArgs, 'skip' | 'first' | 'subgraphError'>>;
  parcelData?: SubscriptionResolver<Maybe<ResolversTypes['ParcelData']>, "parcelData", ParentType, ContextType, RequireFields<SubscriptionparcelDataArgs, 'id' | 'subgraphError'>>;
  parcelDatas?: SubscriptionResolver<Array<ResolversTypes['ParcelData']>, "parcelDatas", ParentType, ContextType, RequireFields<SubscriptionparcelDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  order?: SubscriptionResolver<Maybe<ResolversTypes['Order']>, "order", ParentType, ContextType, RequireFields<SubscriptionorderArgs, 'id' | 'subgraphError'>>;
  orders?: SubscriptionResolver<Array<ResolversTypes['Order']>, "orders", ParentType, ContextType, RequireFields<SubscriptionordersArgs, 'skip' | 'first' | 'subgraphError'>>;
  estate?: SubscriptionResolver<Maybe<ResolversTypes['Estate']>, "estate", ParentType, ContextType, RequireFields<SubscriptionestateArgs, 'id' | 'subgraphError'>>;
  estates?: SubscriptionResolver<Array<ResolversTypes['Estate']>, "estates", ParentType, ContextType, RequireFields<SubscriptionestatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  mortgage?: SubscriptionResolver<Maybe<ResolversTypes['Mortgage']>, "mortgage", ParentType, ContextType, RequireFields<SubscriptionmortgageArgs, 'id' | 'subgraphError'>>;
  mortgages?: SubscriptionResolver<Array<ResolversTypes['Mortgage']>, "mortgages", ParentType, ContextType, RequireFields<SubscriptionmortgagesArgs, 'skip' | 'first' | 'subgraphError'>>;
  invite?: SubscriptionResolver<Maybe<ResolversTypes['Invite']>, "invite", ParentType, ContextType, RequireFields<SubscriptioninviteArgs, 'id' | 'subgraphError'>>;
  invites?: SubscriptionResolver<Array<ResolversTypes['Invite']>, "invites", ParentType, ContextType, RequireFields<SubscriptioninvitesArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "user", ParentType, ContextType, RequireFields<SubscriptionuserArgs, 'id' | 'subgraphError'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['User']>, "users", ParentType, ContextType, RequireFields<SubscriptionusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parcels?: Resolver<Maybe<Array<ResolversTypes['Parcel']>>, ParentType, ContextType, RequireFields<UserparcelsArgs, 'skip' | 'first'>>;
  estates?: Resolver<Maybe<Array<ResolversTypes['Estate']>>, ParentType, ContextType, RequireFields<UserestatesArgs, 'skip' | 'first'>>;
  mana?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  mortgages?: Resolver<Maybe<Array<ResolversTypes['Mortgage']>>, ParentType, ContextType, RequireFields<UsermortgagesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Decentraland?: DecentralandResolvers<ContextType>;
  Estate?: EstateResolvers<ContextType>;
  Invite?: InviteResolvers<ContextType>;
  Mortgage?: MortgageResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  Parcel?: ParcelResolvers<ContextType>;
  ParcelData?: ParcelDataResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
}>;

import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace DecentralandTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Decentraland = {
  id: Scalars['ID'];
  landCount: Scalars['Int'];
  estateCount: Scalars['Int'];
};

export type Decentraland_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  landCount?: InputMaybe<Scalars['Int']>;
  landCount_not?: InputMaybe<Scalars['Int']>;
  landCount_gt?: InputMaybe<Scalars['Int']>;
  landCount_lt?: InputMaybe<Scalars['Int']>;
  landCount_gte?: InputMaybe<Scalars['Int']>;
  landCount_lte?: InputMaybe<Scalars['Int']>;
  landCount_in?: InputMaybe<Array<Scalars['Int']>>;
  landCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  estateCount?: InputMaybe<Scalars['Int']>;
  estateCount_not?: InputMaybe<Scalars['Int']>;
  estateCount_gt?: InputMaybe<Scalars['Int']>;
  estateCount_lt?: InputMaybe<Scalars['Int']>;
  estateCount_gte?: InputMaybe<Scalars['Int']>;
  estateCount_lte?: InputMaybe<Scalars['Int']>;
  estateCount_in?: InputMaybe<Array<Scalars['Int']>>;
  estateCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export type Decentraland_orderBy =
  | 'id'
  | 'landCount'
  | 'estateCount';

export type Estate = {
  id: Scalars['ID'];
  owner: User;
  operator?: Maybe<Scalars['Bytes']>;
  metaData?: Maybe<Scalars['String']>;
  land?: Maybe<Array<Scalars['BigInt']>>;
  orders?: Maybe<Array<Order>>;
  size?: Maybe<Scalars['Int']>;
  createTransaction?: Maybe<Scalars['Bytes']>;
  updatedAt: Scalars['BigInt'];
  activeOrder?: Maybe<Order>;
  orderOwner?: Maybe<Scalars['Bytes']>;
  orderPrice?: Maybe<Scalars['BigInt']>;
};


export type EstateordersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Order_filter>;
};

export type Estate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  metaData?: InputMaybe<Scalars['String']>;
  metaData_not?: InputMaybe<Scalars['String']>;
  metaData_gt?: InputMaybe<Scalars['String']>;
  metaData_lt?: InputMaybe<Scalars['String']>;
  metaData_gte?: InputMaybe<Scalars['String']>;
  metaData_lte?: InputMaybe<Scalars['String']>;
  metaData_in?: InputMaybe<Array<Scalars['String']>>;
  metaData_not_in?: InputMaybe<Array<Scalars['String']>>;
  metaData_contains?: InputMaybe<Scalars['String']>;
  metaData_not_contains?: InputMaybe<Scalars['String']>;
  metaData_starts_with?: InputMaybe<Scalars['String']>;
  metaData_not_starts_with?: InputMaybe<Scalars['String']>;
  metaData_ends_with?: InputMaybe<Scalars['String']>;
  metaData_not_ends_with?: InputMaybe<Scalars['String']>;
  land?: InputMaybe<Array<Scalars['BigInt']>>;
  land_not?: InputMaybe<Array<Scalars['BigInt']>>;
  land_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  land_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  size?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<Scalars['Int']>>;
  size_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createTransaction?: InputMaybe<Scalars['Bytes']>;
  createTransaction_not?: InputMaybe<Scalars['Bytes']>;
  createTransaction_in?: InputMaybe<Array<Scalars['Bytes']>>;
  createTransaction_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  createTransaction_contains?: InputMaybe<Scalars['Bytes']>;
  createTransaction_not_contains?: InputMaybe<Scalars['Bytes']>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  activeOrder?: InputMaybe<Scalars['String']>;
  activeOrder_not?: InputMaybe<Scalars['String']>;
  activeOrder_gt?: InputMaybe<Scalars['String']>;
  activeOrder_lt?: InputMaybe<Scalars['String']>;
  activeOrder_gte?: InputMaybe<Scalars['String']>;
  activeOrder_lte?: InputMaybe<Scalars['String']>;
  activeOrder_in?: InputMaybe<Array<Scalars['String']>>;
  activeOrder_not_in?: InputMaybe<Array<Scalars['String']>>;
  activeOrder_contains?: InputMaybe<Scalars['String']>;
  activeOrder_not_contains?: InputMaybe<Scalars['String']>;
  activeOrder_starts_with?: InputMaybe<Scalars['String']>;
  activeOrder_not_starts_with?: InputMaybe<Scalars['String']>;
  activeOrder_ends_with?: InputMaybe<Scalars['String']>;
  activeOrder_not_ends_with?: InputMaybe<Scalars['String']>;
  orderOwner?: InputMaybe<Scalars['Bytes']>;
  orderOwner_not?: InputMaybe<Scalars['Bytes']>;
  orderOwner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  orderOwner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  orderOwner_contains?: InputMaybe<Scalars['Bytes']>;
  orderOwner_not_contains?: InputMaybe<Scalars['Bytes']>;
  orderPrice?: InputMaybe<Scalars['BigInt']>;
  orderPrice_not?: InputMaybe<Scalars['BigInt']>;
  orderPrice_gt?: InputMaybe<Scalars['BigInt']>;
  orderPrice_lt?: InputMaybe<Scalars['BigInt']>;
  orderPrice_gte?: InputMaybe<Scalars['BigInt']>;
  orderPrice_lte?: InputMaybe<Scalars['BigInt']>;
  orderPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  orderPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Estate_orderBy =
  | 'id'
  | 'owner'
  | 'operator'
  | 'metaData'
  | 'land'
  | 'orders'
  | 'size'
  | 'createTransaction'
  | 'updatedAt'
  | 'activeOrder'
  | 'orderOwner'
  | 'orderPrice';

export type Invite = {
  id: Scalars['ID'];
  inviteBalance: Scalars['BigInt'];
  invites: Array<Scalars['BigInt']>;
};

export type Invite_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  inviteBalance?: InputMaybe<Scalars['BigInt']>;
  inviteBalance_not?: InputMaybe<Scalars['BigInt']>;
  inviteBalance_gt?: InputMaybe<Scalars['BigInt']>;
  inviteBalance_lt?: InputMaybe<Scalars['BigInt']>;
  inviteBalance_gte?: InputMaybe<Scalars['BigInt']>;
  inviteBalance_lte?: InputMaybe<Scalars['BigInt']>;
  inviteBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inviteBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  invites?: InputMaybe<Array<Scalars['BigInt']>>;
  invites_not?: InputMaybe<Array<Scalars['BigInt']>>;
  invites_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  invites_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Invite_orderBy =
  | 'id'
  | 'inviteBalance'
  | 'invites';

export type Mortgage = {
  id: Scalars['ID'];
  txHash: Scalars['Bytes'];
  createdAt: Scalars['BigInt'];
  startedAt?: Maybe<Scalars['BigInt']>;
  lastUpdatedAt: Scalars['BigInt'];
  status: MortgageStatus;
  borrower: User;
  rcnEngine: Scalars['Bytes'];
  loan_id: Scalars['BigInt'];
  landMarket: Scalars['Bytes'];
  landID: Scalars['BigInt'];
  deposit: Scalars['BigInt'];
  tokenConverter: Scalars['Bytes'];
  landCost: Scalars['BigInt'];
  parcel?: Maybe<Parcel>;
  estate?: Maybe<Estate>;
  lender: Scalars['Bytes'];
  loanAmount: Scalars['BigInt'];
  dueTime: Scalars['Int'];
};

export type MortgageStatus =
  | 'pending'
  | 'cancelled'
  | 'ongoing'
  | 'paid'
  | 'defaulted';

export type Mortgage_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedAt?: InputMaybe<Scalars['BigInt']>;
  startedAt_not?: InputMaybe<Scalars['BigInt']>;
  startedAt_gt?: InputMaybe<Scalars['BigInt']>;
  startedAt_lt?: InputMaybe<Scalars['BigInt']>;
  startedAt_gte?: InputMaybe<Scalars['BigInt']>;
  startedAt_lte?: InputMaybe<Scalars['BigInt']>;
  startedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<MortgageStatus>;
  status_not?: InputMaybe<MortgageStatus>;
  status_in?: InputMaybe<Array<MortgageStatus>>;
  status_not_in?: InputMaybe<Array<MortgageStatus>>;
  borrower?: InputMaybe<Scalars['String']>;
  borrower_not?: InputMaybe<Scalars['String']>;
  borrower_gt?: InputMaybe<Scalars['String']>;
  borrower_lt?: InputMaybe<Scalars['String']>;
  borrower_gte?: InputMaybe<Scalars['String']>;
  borrower_lte?: InputMaybe<Scalars['String']>;
  borrower_in?: InputMaybe<Array<Scalars['String']>>;
  borrower_not_in?: InputMaybe<Array<Scalars['String']>>;
  borrower_contains?: InputMaybe<Scalars['String']>;
  borrower_not_contains?: InputMaybe<Scalars['String']>;
  borrower_starts_with?: InputMaybe<Scalars['String']>;
  borrower_not_starts_with?: InputMaybe<Scalars['String']>;
  borrower_ends_with?: InputMaybe<Scalars['String']>;
  borrower_not_ends_with?: InputMaybe<Scalars['String']>;
  rcnEngine?: InputMaybe<Scalars['Bytes']>;
  rcnEngine_not?: InputMaybe<Scalars['Bytes']>;
  rcnEngine_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rcnEngine_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rcnEngine_contains?: InputMaybe<Scalars['Bytes']>;
  rcnEngine_not_contains?: InputMaybe<Scalars['Bytes']>;
  loan_id?: InputMaybe<Scalars['BigInt']>;
  loan_id_not?: InputMaybe<Scalars['BigInt']>;
  loan_id_gt?: InputMaybe<Scalars['BigInt']>;
  loan_id_lt?: InputMaybe<Scalars['BigInt']>;
  loan_id_gte?: InputMaybe<Scalars['BigInt']>;
  loan_id_lte?: InputMaybe<Scalars['BigInt']>;
  loan_id_in?: InputMaybe<Array<Scalars['BigInt']>>;
  loan_id_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  landMarket?: InputMaybe<Scalars['Bytes']>;
  landMarket_not?: InputMaybe<Scalars['Bytes']>;
  landMarket_in?: InputMaybe<Array<Scalars['Bytes']>>;
  landMarket_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  landMarket_contains?: InputMaybe<Scalars['Bytes']>;
  landMarket_not_contains?: InputMaybe<Scalars['Bytes']>;
  landID?: InputMaybe<Scalars['BigInt']>;
  landID_not?: InputMaybe<Scalars['BigInt']>;
  landID_gt?: InputMaybe<Scalars['BigInt']>;
  landID_lt?: InputMaybe<Scalars['BigInt']>;
  landID_gte?: InputMaybe<Scalars['BigInt']>;
  landID_lte?: InputMaybe<Scalars['BigInt']>;
  landID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  landID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenConverter?: InputMaybe<Scalars['Bytes']>;
  tokenConverter_not?: InputMaybe<Scalars['Bytes']>;
  tokenConverter_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenConverter_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenConverter_contains?: InputMaybe<Scalars['Bytes']>;
  tokenConverter_not_contains?: InputMaybe<Scalars['Bytes']>;
  landCost?: InputMaybe<Scalars['BigInt']>;
  landCost_not?: InputMaybe<Scalars['BigInt']>;
  landCost_gt?: InputMaybe<Scalars['BigInt']>;
  landCost_lt?: InputMaybe<Scalars['BigInt']>;
  landCost_gte?: InputMaybe<Scalars['BigInt']>;
  landCost_lte?: InputMaybe<Scalars['BigInt']>;
  landCost_in?: InputMaybe<Array<Scalars['BigInt']>>;
  landCost_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  parcel?: InputMaybe<Scalars['String']>;
  parcel_not?: InputMaybe<Scalars['String']>;
  parcel_gt?: InputMaybe<Scalars['String']>;
  parcel_lt?: InputMaybe<Scalars['String']>;
  parcel_gte?: InputMaybe<Scalars['String']>;
  parcel_lte?: InputMaybe<Scalars['String']>;
  parcel_in?: InputMaybe<Array<Scalars['String']>>;
  parcel_not_in?: InputMaybe<Array<Scalars['String']>>;
  parcel_contains?: InputMaybe<Scalars['String']>;
  parcel_not_contains?: InputMaybe<Scalars['String']>;
  parcel_starts_with?: InputMaybe<Scalars['String']>;
  parcel_not_starts_with?: InputMaybe<Scalars['String']>;
  parcel_ends_with?: InputMaybe<Scalars['String']>;
  parcel_not_ends_with?: InputMaybe<Scalars['String']>;
  estate?: InputMaybe<Scalars['String']>;
  estate_not?: InputMaybe<Scalars['String']>;
  estate_gt?: InputMaybe<Scalars['String']>;
  estate_lt?: InputMaybe<Scalars['String']>;
  estate_gte?: InputMaybe<Scalars['String']>;
  estate_lte?: InputMaybe<Scalars['String']>;
  estate_in?: InputMaybe<Array<Scalars['String']>>;
  estate_not_in?: InputMaybe<Array<Scalars['String']>>;
  estate_contains?: InputMaybe<Scalars['String']>;
  estate_not_contains?: InputMaybe<Scalars['String']>;
  estate_starts_with?: InputMaybe<Scalars['String']>;
  estate_not_starts_with?: InputMaybe<Scalars['String']>;
  estate_ends_with?: InputMaybe<Scalars['String']>;
  estate_not_ends_with?: InputMaybe<Scalars['String']>;
  lender?: InputMaybe<Scalars['Bytes']>;
  lender_not?: InputMaybe<Scalars['Bytes']>;
  lender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lender_contains?: InputMaybe<Scalars['Bytes']>;
  lender_not_contains?: InputMaybe<Scalars['Bytes']>;
  loanAmount?: InputMaybe<Scalars['BigInt']>;
  loanAmount_not?: InputMaybe<Scalars['BigInt']>;
  loanAmount_gt?: InputMaybe<Scalars['BigInt']>;
  loanAmount_lt?: InputMaybe<Scalars['BigInt']>;
  loanAmount_gte?: InputMaybe<Scalars['BigInt']>;
  loanAmount_lte?: InputMaybe<Scalars['BigInt']>;
  loanAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  loanAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dueTime?: InputMaybe<Scalars['Int']>;
  dueTime_not?: InputMaybe<Scalars['Int']>;
  dueTime_gt?: InputMaybe<Scalars['Int']>;
  dueTime_lt?: InputMaybe<Scalars['Int']>;
  dueTime_gte?: InputMaybe<Scalars['Int']>;
  dueTime_lte?: InputMaybe<Scalars['Int']>;
  dueTime_in?: InputMaybe<Array<Scalars['Int']>>;
  dueTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mortgage_orderBy =
  | 'id'
  | 'txHash'
  | 'createdAt'
  | 'startedAt'
  | 'lastUpdatedAt'
  | 'status'
  | 'borrower'
  | 'rcnEngine'
  | 'loan_id'
  | 'landMarket'
  | 'landID'
  | 'deposit'
  | 'tokenConverter'
  | 'landCost'
  | 'parcel'
  | 'estate'
  | 'lender'
  | 'loanAmount'
  | 'dueTime';

export type Order = {
  id: Scalars['ID'];
  type: OrderType;
  parcel?: Maybe<Parcel>;
  estate?: Maybe<Estate>;
  txHash: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  price: Scalars['BigInt'];
  status: OrderStatus;
  buyer?: Maybe<Scalars['Bytes']>;
  blockNumber: Scalars['BigInt'];
  expiresAt: Scalars['BigInt'];
  timeCreated: Scalars['BigInt'];
  timeUpdatedAt: Scalars['BigInt'];
  marketplace: Scalars['Bytes'];
  nftAddress?: Maybe<Scalars['Bytes']>;
};

export type OrderDirection =
  | 'asc'
  | 'desc';

export type OrderStatus =
  | 'open'
  | 'sold'
  | 'cancelled';

export type OrderType =
  | 'parcel'
  | 'estate';

export type Order_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<OrderType>;
  type_not?: InputMaybe<OrderType>;
  type_in?: InputMaybe<Array<OrderType>>;
  type_not_in?: InputMaybe<Array<OrderType>>;
  parcel?: InputMaybe<Scalars['String']>;
  parcel_not?: InputMaybe<Scalars['String']>;
  parcel_gt?: InputMaybe<Scalars['String']>;
  parcel_lt?: InputMaybe<Scalars['String']>;
  parcel_gte?: InputMaybe<Scalars['String']>;
  parcel_lte?: InputMaybe<Scalars['String']>;
  parcel_in?: InputMaybe<Array<Scalars['String']>>;
  parcel_not_in?: InputMaybe<Array<Scalars['String']>>;
  parcel_contains?: InputMaybe<Scalars['String']>;
  parcel_not_contains?: InputMaybe<Scalars['String']>;
  parcel_starts_with?: InputMaybe<Scalars['String']>;
  parcel_not_starts_with?: InputMaybe<Scalars['String']>;
  parcel_ends_with?: InputMaybe<Scalars['String']>;
  parcel_not_ends_with?: InputMaybe<Scalars['String']>;
  estate?: InputMaybe<Scalars['String']>;
  estate_not?: InputMaybe<Scalars['String']>;
  estate_gt?: InputMaybe<Scalars['String']>;
  estate_lt?: InputMaybe<Scalars['String']>;
  estate_gte?: InputMaybe<Scalars['String']>;
  estate_lte?: InputMaybe<Scalars['String']>;
  estate_in?: InputMaybe<Array<Scalars['String']>>;
  estate_not_in?: InputMaybe<Array<Scalars['String']>>;
  estate_contains?: InputMaybe<Scalars['String']>;
  estate_not_contains?: InputMaybe<Scalars['String']>;
  estate_starts_with?: InputMaybe<Scalars['String']>;
  estate_not_starts_with?: InputMaybe<Scalars['String']>;
  estate_ends_with?: InputMaybe<Scalars['String']>;
  estate_not_ends_with?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<OrderStatus>;
  status_not?: InputMaybe<OrderStatus>;
  status_in?: InputMaybe<Array<OrderStatus>>;
  status_not_in?: InputMaybe<Array<OrderStatus>>;
  buyer?: InputMaybe<Scalars['Bytes']>;
  buyer_not?: InputMaybe<Scalars['Bytes']>;
  buyer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  buyer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  buyer_contains?: InputMaybe<Scalars['Bytes']>;
  buyer_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiresAt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_not?: InputMaybe<Scalars['BigInt']>;
  expiresAt_gt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_lt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_gte?: InputMaybe<Scalars['BigInt']>;
  expiresAt_lte?: InputMaybe<Scalars['BigInt']>;
  expiresAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiresAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timeCreated?: InputMaybe<Scalars['BigInt']>;
  timeCreated_not?: InputMaybe<Scalars['BigInt']>;
  timeCreated_gt?: InputMaybe<Scalars['BigInt']>;
  timeCreated_lt?: InputMaybe<Scalars['BigInt']>;
  timeCreated_gte?: InputMaybe<Scalars['BigInt']>;
  timeCreated_lte?: InputMaybe<Scalars['BigInt']>;
  timeCreated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timeCreated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timeUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  timeUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  timeUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  timeUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  timeUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  timeUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  timeUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timeUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  marketplace?: InputMaybe<Scalars['Bytes']>;
  marketplace_not?: InputMaybe<Scalars['Bytes']>;
  marketplace_in?: InputMaybe<Array<Scalars['Bytes']>>;
  marketplace_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  marketplace_contains?: InputMaybe<Scalars['Bytes']>;
  marketplace_not_contains?: InputMaybe<Scalars['Bytes']>;
  nftAddress?: InputMaybe<Scalars['Bytes']>;
  nftAddress_not?: InputMaybe<Scalars['Bytes']>;
  nftAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  nftAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  nftAddress_contains?: InputMaybe<Scalars['Bytes']>;
  nftAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
};

export type Order_orderBy =
  | 'id'
  | 'type'
  | 'parcel'
  | 'estate'
  | 'txHash'
  | 'owner'
  | 'price'
  | 'status'
  | 'buyer'
  | 'blockNumber'
  | 'expiresAt'
  | 'timeCreated'
  | 'timeUpdatedAt'
  | 'marketplace'
  | 'nftAddress';

export type Parcel = {
  id: Scalars['ID'];
  idNumber: Scalars['BigInt'];
  x: Scalars['BigInt'];
  y: Scalars['BigInt'];
  estate?: Maybe<Estate>;
  owner: User;
  data?: Maybe<ParcelData>;
  orderOwner?: Maybe<Scalars['Bytes']>;
  orderPrice?: Maybe<Scalars['BigInt']>;
  activeOrder?: Maybe<Order>;
  orders?: Maybe<Array<Order>>;
  updatedAt: Scalars['BigInt'];
  operators?: Maybe<Array<Scalars['Bytes']>>;
};


export type ParcelordersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Order_filter>;
};

export type ParcelData = {
  id: Scalars['ID'];
  parcel: Parcel;
  version?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  ipns?: Maybe<Scalars['String']>;
};

export type ParcelData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  parcel?: InputMaybe<Scalars['String']>;
  parcel_not?: InputMaybe<Scalars['String']>;
  parcel_gt?: InputMaybe<Scalars['String']>;
  parcel_lt?: InputMaybe<Scalars['String']>;
  parcel_gte?: InputMaybe<Scalars['String']>;
  parcel_lte?: InputMaybe<Scalars['String']>;
  parcel_in?: InputMaybe<Array<Scalars['String']>>;
  parcel_not_in?: InputMaybe<Array<Scalars['String']>>;
  parcel_contains?: InputMaybe<Scalars['String']>;
  parcel_not_contains?: InputMaybe<Scalars['String']>;
  parcel_starts_with?: InputMaybe<Scalars['String']>;
  parcel_not_starts_with?: InputMaybe<Scalars['String']>;
  parcel_ends_with?: InputMaybe<Scalars['String']>;
  parcel_not_ends_with?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
  version_not?: InputMaybe<Scalars['String']>;
  version_gt?: InputMaybe<Scalars['String']>;
  version_lt?: InputMaybe<Scalars['String']>;
  version_gte?: InputMaybe<Scalars['String']>;
  version_lte?: InputMaybe<Scalars['String']>;
  version_in?: InputMaybe<Array<Scalars['String']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']>>;
  version_contains?: InputMaybe<Scalars['String']>;
  version_not_contains?: InputMaybe<Scalars['String']>;
  version_starts_with?: InputMaybe<Scalars['String']>;
  version_not_starts_with?: InputMaybe<Scalars['String']>;
  version_ends_with?: InputMaybe<Scalars['String']>;
  version_not_ends_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  ipns?: InputMaybe<Scalars['String']>;
  ipns_not?: InputMaybe<Scalars['String']>;
  ipns_gt?: InputMaybe<Scalars['String']>;
  ipns_lt?: InputMaybe<Scalars['String']>;
  ipns_gte?: InputMaybe<Scalars['String']>;
  ipns_lte?: InputMaybe<Scalars['String']>;
  ipns_in?: InputMaybe<Array<Scalars['String']>>;
  ipns_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipns_contains?: InputMaybe<Scalars['String']>;
  ipns_not_contains?: InputMaybe<Scalars['String']>;
  ipns_starts_with?: InputMaybe<Scalars['String']>;
  ipns_not_starts_with?: InputMaybe<Scalars['String']>;
  ipns_ends_with?: InputMaybe<Scalars['String']>;
  ipns_not_ends_with?: InputMaybe<Scalars['String']>;
};

export type ParcelData_orderBy =
  | 'id'
  | 'parcel'
  | 'version'
  | 'name'
  | 'description'
  | 'ipns';

export type Parcel_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  idNumber?: InputMaybe<Scalars['BigInt']>;
  idNumber_not?: InputMaybe<Scalars['BigInt']>;
  idNumber_gt?: InputMaybe<Scalars['BigInt']>;
  idNumber_lt?: InputMaybe<Scalars['BigInt']>;
  idNumber_gte?: InputMaybe<Scalars['BigInt']>;
  idNumber_lte?: InputMaybe<Scalars['BigInt']>;
  idNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  idNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  x?: InputMaybe<Scalars['BigInt']>;
  x_not?: InputMaybe<Scalars['BigInt']>;
  x_gt?: InputMaybe<Scalars['BigInt']>;
  x_lt?: InputMaybe<Scalars['BigInt']>;
  x_gte?: InputMaybe<Scalars['BigInt']>;
  x_lte?: InputMaybe<Scalars['BigInt']>;
  x_in?: InputMaybe<Array<Scalars['BigInt']>>;
  x_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  y?: InputMaybe<Scalars['BigInt']>;
  y_not?: InputMaybe<Scalars['BigInt']>;
  y_gt?: InputMaybe<Scalars['BigInt']>;
  y_lt?: InputMaybe<Scalars['BigInt']>;
  y_gte?: InputMaybe<Scalars['BigInt']>;
  y_lte?: InputMaybe<Scalars['BigInt']>;
  y_in?: InputMaybe<Array<Scalars['BigInt']>>;
  y_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  estate?: InputMaybe<Scalars['String']>;
  estate_not?: InputMaybe<Scalars['String']>;
  estate_gt?: InputMaybe<Scalars['String']>;
  estate_lt?: InputMaybe<Scalars['String']>;
  estate_gte?: InputMaybe<Scalars['String']>;
  estate_lte?: InputMaybe<Scalars['String']>;
  estate_in?: InputMaybe<Array<Scalars['String']>>;
  estate_not_in?: InputMaybe<Array<Scalars['String']>>;
  estate_contains?: InputMaybe<Scalars['String']>;
  estate_not_contains?: InputMaybe<Scalars['String']>;
  estate_starts_with?: InputMaybe<Scalars['String']>;
  estate_not_starts_with?: InputMaybe<Scalars['String']>;
  estate_ends_with?: InputMaybe<Scalars['String']>;
  estate_not_ends_with?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['String']>;
  data_not?: InputMaybe<Scalars['String']>;
  data_gt?: InputMaybe<Scalars['String']>;
  data_lt?: InputMaybe<Scalars['String']>;
  data_gte?: InputMaybe<Scalars['String']>;
  data_lte?: InputMaybe<Scalars['String']>;
  data_in?: InputMaybe<Array<Scalars['String']>>;
  data_not_in?: InputMaybe<Array<Scalars['String']>>;
  data_contains?: InputMaybe<Scalars['String']>;
  data_not_contains?: InputMaybe<Scalars['String']>;
  data_starts_with?: InputMaybe<Scalars['String']>;
  data_not_starts_with?: InputMaybe<Scalars['String']>;
  data_ends_with?: InputMaybe<Scalars['String']>;
  data_not_ends_with?: InputMaybe<Scalars['String']>;
  orderOwner?: InputMaybe<Scalars['Bytes']>;
  orderOwner_not?: InputMaybe<Scalars['Bytes']>;
  orderOwner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  orderOwner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  orderOwner_contains?: InputMaybe<Scalars['Bytes']>;
  orderOwner_not_contains?: InputMaybe<Scalars['Bytes']>;
  orderPrice?: InputMaybe<Scalars['BigInt']>;
  orderPrice_not?: InputMaybe<Scalars['BigInt']>;
  orderPrice_gt?: InputMaybe<Scalars['BigInt']>;
  orderPrice_lt?: InputMaybe<Scalars['BigInt']>;
  orderPrice_gte?: InputMaybe<Scalars['BigInt']>;
  orderPrice_lte?: InputMaybe<Scalars['BigInt']>;
  orderPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  orderPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  activeOrder?: InputMaybe<Scalars['String']>;
  activeOrder_not?: InputMaybe<Scalars['String']>;
  activeOrder_gt?: InputMaybe<Scalars['String']>;
  activeOrder_lt?: InputMaybe<Scalars['String']>;
  activeOrder_gte?: InputMaybe<Scalars['String']>;
  activeOrder_lte?: InputMaybe<Scalars['String']>;
  activeOrder_in?: InputMaybe<Array<Scalars['String']>>;
  activeOrder_not_in?: InputMaybe<Array<Scalars['String']>>;
  activeOrder_contains?: InputMaybe<Scalars['String']>;
  activeOrder_not_contains?: InputMaybe<Scalars['String']>;
  activeOrder_starts_with?: InputMaybe<Scalars['String']>;
  activeOrder_not_starts_with?: InputMaybe<Scalars['String']>;
  activeOrder_ends_with?: InputMaybe<Scalars['String']>;
  activeOrder_not_ends_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  operators?: InputMaybe<Array<Scalars['Bytes']>>;
  operators_not?: InputMaybe<Array<Scalars['Bytes']>>;
  operators_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  operators_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
};

export type Parcel_orderBy =
  | 'id'
  | 'idNumber'
  | 'x'
  | 'y'
  | 'estate'
  | 'owner'
  | 'data'
  | 'orderOwner'
  | 'orderPrice'
  | 'activeOrder'
  | 'orders'
  | 'updatedAt'
  | 'operators';

export type Query = {
  decentraland?: Maybe<Decentraland>;
  decentralands: Array<Decentraland>;
  parcel?: Maybe<Parcel>;
  parcels: Array<Parcel>;
  parcelData?: Maybe<ParcelData>;
  parcelDatas: Array<ParcelData>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  estate?: Maybe<Estate>;
  estates: Array<Estate>;
  mortgage?: Maybe<Mortgage>;
  mortgages: Array<Mortgage>;
  invite?: Maybe<Invite>;
  invites: Array<Invite>;
  user?: Maybe<User>;
  users: Array<User>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerydecentralandArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydecentralandsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Decentraland_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Decentraland_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryparcelArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryparcelsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Parcel_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Parcel_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryparcelDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryparcelDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ParcelData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ParcelData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryorderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryordersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Order_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryestateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryestatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Estate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Estate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymortgageArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymortgagesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mortgage_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mortgage_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinviteArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinvitesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Invite_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Invite_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  decentraland?: Maybe<Decentraland>;
  decentralands: Array<Decentraland>;
  parcel?: Maybe<Parcel>;
  parcels: Array<Parcel>;
  parcelData?: Maybe<ParcelData>;
  parcelDatas: Array<ParcelData>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  estate?: Maybe<Estate>;
  estates: Array<Estate>;
  mortgage?: Maybe<Mortgage>;
  mortgages: Array<Mortgage>;
  invite?: Maybe<Invite>;
  invites: Array<Invite>;
  user?: Maybe<User>;
  users: Array<User>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptiondecentralandArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondecentralandsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Decentraland_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Decentraland_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionparcelArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionparcelsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Parcel_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Parcel_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionparcelDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionparcelDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ParcelData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ParcelData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionorderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionordersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Order_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionestateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionestatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Estate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Estate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmortgageArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmortgagesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mortgage_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mortgage_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninviteArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninvitesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Invite_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Invite_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type User = {
  id: Scalars['ID'];
  parcels?: Maybe<Array<Parcel>>;
  estates?: Maybe<Array<Estate>>;
  mana?: Maybe<Scalars['BigInt']>;
  mortgages?: Maybe<Array<Mortgage>>;
};


export type UserparcelsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Parcel_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Parcel_filter>;
};


export type UserestatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Estate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Estate_filter>;
};


export type UsermortgagesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mortgage_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mortgage_filter>;
};

export type User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  mana?: InputMaybe<Scalars['BigInt']>;
  mana_not?: InputMaybe<Scalars['BigInt']>;
  mana_gt?: InputMaybe<Scalars['BigInt']>;
  mana_lt?: InputMaybe<Scalars['BigInt']>;
  mana_gte?: InputMaybe<Scalars['BigInt']>;
  mana_lte?: InputMaybe<Scalars['BigInt']>;
  mana_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mana_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type User_orderBy =
  | 'id'
  | 'parcels'
  | 'estates'
  | 'mana'
  | 'mortgages';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

    }
    export type QueryDecentralandSdk = {
  /** null **/
  decentraland: InContextSdkMethod<DecentralandTypes.Query['decentraland'], DecentralandTypes.QuerydecentralandArgs, MeshContext>,
  /** null **/
  decentralands: InContextSdkMethod<DecentralandTypes.Query['decentralands'], DecentralandTypes.QuerydecentralandsArgs, MeshContext>,
  /** null **/
  parcel: InContextSdkMethod<DecentralandTypes.Query['parcel'], DecentralandTypes.QueryparcelArgs, MeshContext>,
  /** null **/
  parcels: InContextSdkMethod<DecentralandTypes.Query['parcels'], DecentralandTypes.QueryparcelsArgs, MeshContext>,
  /** null **/
  parcelData: InContextSdkMethod<DecentralandTypes.Query['parcelData'], DecentralandTypes.QueryparcelDataArgs, MeshContext>,
  /** null **/
  parcelDatas: InContextSdkMethod<DecentralandTypes.Query['parcelDatas'], DecentralandTypes.QueryparcelDatasArgs, MeshContext>,
  /** null **/
  order: InContextSdkMethod<DecentralandTypes.Query['order'], DecentralandTypes.QueryorderArgs, MeshContext>,
  /** null **/
  orders: InContextSdkMethod<DecentralandTypes.Query['orders'], DecentralandTypes.QueryordersArgs, MeshContext>,
  /** null **/
  estate: InContextSdkMethod<DecentralandTypes.Query['estate'], DecentralandTypes.QueryestateArgs, MeshContext>,
  /** null **/
  estates: InContextSdkMethod<DecentralandTypes.Query['estates'], DecentralandTypes.QueryestatesArgs, MeshContext>,
  /** null **/
  mortgage: InContextSdkMethod<DecentralandTypes.Query['mortgage'], DecentralandTypes.QuerymortgageArgs, MeshContext>,
  /** null **/
  mortgages: InContextSdkMethod<DecentralandTypes.Query['mortgages'], DecentralandTypes.QuerymortgagesArgs, MeshContext>,
  /** null **/
  invite: InContextSdkMethod<DecentralandTypes.Query['invite'], DecentralandTypes.QueryinviteArgs, MeshContext>,
  /** null **/
  invites: InContextSdkMethod<DecentralandTypes.Query['invites'], DecentralandTypes.QueryinvitesArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<DecentralandTypes.Query['user'], DecentralandTypes.QueryuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<DecentralandTypes.Query['users'], DecentralandTypes.QueryusersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<DecentralandTypes.Query['_meta'], DecentralandTypes.Query_metaArgs, MeshContext>
};

export type MutationDecentralandSdk = {

};

export type SubscriptionDecentralandSdk = {
  /** null **/
  decentraland: InContextSdkMethod<DecentralandTypes.Subscription['decentraland'], DecentralandTypes.SubscriptiondecentralandArgs, MeshContext>,
  /** null **/
  decentralands: InContextSdkMethod<DecentralandTypes.Subscription['decentralands'], DecentralandTypes.SubscriptiondecentralandsArgs, MeshContext>,
  /** null **/
  parcel: InContextSdkMethod<DecentralandTypes.Subscription['parcel'], DecentralandTypes.SubscriptionparcelArgs, MeshContext>,
  /** null **/
  parcels: InContextSdkMethod<DecentralandTypes.Subscription['parcels'], DecentralandTypes.SubscriptionparcelsArgs, MeshContext>,
  /** null **/
  parcelData: InContextSdkMethod<DecentralandTypes.Subscription['parcelData'], DecentralandTypes.SubscriptionparcelDataArgs, MeshContext>,
  /** null **/
  parcelDatas: InContextSdkMethod<DecentralandTypes.Subscription['parcelDatas'], DecentralandTypes.SubscriptionparcelDatasArgs, MeshContext>,
  /** null **/
  order: InContextSdkMethod<DecentralandTypes.Subscription['order'], DecentralandTypes.SubscriptionorderArgs, MeshContext>,
  /** null **/
  orders: InContextSdkMethod<DecentralandTypes.Subscription['orders'], DecentralandTypes.SubscriptionordersArgs, MeshContext>,
  /** null **/
  estate: InContextSdkMethod<DecentralandTypes.Subscription['estate'], DecentralandTypes.SubscriptionestateArgs, MeshContext>,
  /** null **/
  estates: InContextSdkMethod<DecentralandTypes.Subscription['estates'], DecentralandTypes.SubscriptionestatesArgs, MeshContext>,
  /** null **/
  mortgage: InContextSdkMethod<DecentralandTypes.Subscription['mortgage'], DecentralandTypes.SubscriptionmortgageArgs, MeshContext>,
  /** null **/
  mortgages: InContextSdkMethod<DecentralandTypes.Subscription['mortgages'], DecentralandTypes.SubscriptionmortgagesArgs, MeshContext>,
  /** null **/
  invite: InContextSdkMethod<DecentralandTypes.Subscription['invite'], DecentralandTypes.SubscriptioninviteArgs, MeshContext>,
  /** null **/
  invites: InContextSdkMethod<DecentralandTypes.Subscription['invites'], DecentralandTypes.SubscriptioninvitesArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<DecentralandTypes.Subscription['user'], DecentralandTypes.SubscriptionuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<DecentralandTypes.Subscription['users'], DecentralandTypes.SubscriptionusersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<DecentralandTypes.Subscription['_meta'], DecentralandTypes.Subscription_metaArgs, MeshContext>
};

export type DecentralandContext = {
      ["decentraland"]: { Query: QueryDecentralandSdk, Mutation: MutationDecentralandSdk, Subscription: SubscriptionDecentralandSdk },
    };

export type MeshContext = DecentralandContext & BaseMeshContext;


import { getMesh } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import pathModule from 'path';
import { fileURLToPath } from '@graphql-mesh/utils';

const importedModules: Record<string, any> = {

};

const baseDir = pathModule.join(__dirname, '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  if (!(relativeModuleId in importedModules)) {
    throw new Error(`Cannot find module '${relativeModuleId}'.`);
  }
  return Promise.resolve(importedModules[relativeModuleId]);
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
}), {
  readonly: true,
  validate: false
});


                import { findAndParseConfig } from '@graphql-mesh/cli';
                function getMeshOptions() {
                  console.warn('WARNING: These artifacts are built for development mode. Please run "graphclient build" to build production artifacts');
                  return findAndParseConfig({
                    dir: baseDir,
                    artifactsDir: ".graphclient",
                    configName: "graphclient",
                  });
                }
              

export const documentsInSDL = /*#__PURE__*/ [];

export async function getBuiltGraphClient(): Promise<MeshInstance<MeshContext>> {
  const meshConfig = await getMeshOptions();
  return getMesh<MeshContext>(meshConfig);
}

export async function getBuiltGraphSDK<TGlobalContext = any, TGlobalRoot = any, TOperationContext = any, TOperationRoot = any>(sdkOptions?: SdkOptions<TGlobalContext, TGlobalRoot>) {
  const { schema } = await getBuiltGraphClient();
  return getSdk<TGlobalContext, TGlobalRoot, TOperationContext, TOperationRoot>(schema, sdkOptions);
}

function handleExecutionResult<T>(result: ExecutionResult, operationName: string) {
  if (result.errors) {
    const originalErrors = result.errors.map(error => error.originalError|| error);
    throw new AggregateError(originalErrors, `Failed to execute ${operationName}: \n\t${originalErrors.join('\n\t')}`);
  }
  return result.data as unknown as T;
}
export interface SdkOptions<TGlobalContext = any, TGlobalRoot = any> {
  globalContext?: TGlobalContext;
  globalRoot?: TGlobalRoot;
  jitOptions?: Partial<CompilerOptions>;
}
export function getSdk<TGlobalContext = any, TGlobalRoot = any, TOperationContext = any, TOperationRoot = any>(schema: GraphQLSchema, { globalContext, globalRoot, jitOptions = {} }: SdkOptions<TGlobalContext, TGlobalRoot> = {}) {


  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;