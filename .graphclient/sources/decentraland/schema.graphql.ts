import { buildSchema, Source } from 'graphql';

const source = new Source(/* GraphQL */`
schema {
  query: Query
  subscription: Subscription
}

directive @entity on OBJECT

directive @derivedFrom(field: String) on FIELD_DEFINITION

directive @subgraphId(id: String) on OBJECT

scalar BigDecimal

scalar BigInt

input Block_height {
  hash: Bytes
  number: Int
  number_gte: Int
}

scalar Bytes

type Decentraland {
  id: ID!
  landCount: Int!
  estateCount: Int!
}

input Decentraland_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  landCount: Int
  landCount_not: Int
  landCount_gt: Int
  landCount_lt: Int
  landCount_gte: Int
  landCount_lte: Int
  landCount_in: [Int!]
  landCount_not_in: [Int!]
  estateCount: Int
  estateCount_not: Int
  estateCount_gt: Int
  estateCount_lt: Int
  estateCount_gte: Int
  estateCount_lte: Int
  estateCount_in: [Int!]
  estateCount_not_in: [Int!]
}

enum Decentraland_orderBy {
  id
  landCount
  estateCount
}

type Estate {
  id: ID!
  owner: User!
  operator: Bytes
  metaData: String
  land: [BigInt!]
  orders(skip: Int = 0, first: Int = 100, orderBy: Order_orderBy, orderDirection: OrderDirection, where: Order_filter): [Order!]
  size: Int
  createTransaction: Bytes
  updatedAt: BigInt!
  activeOrder: Order
  orderOwner: Bytes
  orderPrice: BigInt
}

input Estate_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  owner: String
  owner_not: String
  owner_gt: String
  owner_lt: String
  owner_gte: String
  owner_lte: String
  owner_in: [String!]
  owner_not_in: [String!]
  owner_contains: String
  owner_not_contains: String
  owner_starts_with: String
  owner_not_starts_with: String
  owner_ends_with: String
  owner_not_ends_with: String
  operator: Bytes
  operator_not: Bytes
  operator_in: [Bytes!]
  operator_not_in: [Bytes!]
  operator_contains: Bytes
  operator_not_contains: Bytes
  metaData: String
  metaData_not: String
  metaData_gt: String
  metaData_lt: String
  metaData_gte: String
  metaData_lte: String
  metaData_in: [String!]
  metaData_not_in: [String!]
  metaData_contains: String
  metaData_not_contains: String
  metaData_starts_with: String
  metaData_not_starts_with: String
  metaData_ends_with: String
  metaData_not_ends_with: String
  land: [BigInt!]
  land_not: [BigInt!]
  land_contains: [BigInt!]
  land_not_contains: [BigInt!]
  size: Int
  size_not: Int
  size_gt: Int
  size_lt: Int
  size_gte: Int
  size_lte: Int
  size_in: [Int!]
  size_not_in: [Int!]
  createTransaction: Bytes
  createTransaction_not: Bytes
  createTransaction_in: [Bytes!]
  createTransaction_not_in: [Bytes!]
  createTransaction_contains: Bytes
  createTransaction_not_contains: Bytes
  updatedAt: BigInt
  updatedAt_not: BigInt
  updatedAt_gt: BigInt
  updatedAt_lt: BigInt
  updatedAt_gte: BigInt
  updatedAt_lte: BigInt
  updatedAt_in: [BigInt!]
  updatedAt_not_in: [BigInt!]
  activeOrder: String
  activeOrder_not: String
  activeOrder_gt: String
  activeOrder_lt: String
  activeOrder_gte: String
  activeOrder_lte: String
  activeOrder_in: [String!]
  activeOrder_not_in: [String!]
  activeOrder_contains: String
  activeOrder_not_contains: String
  activeOrder_starts_with: String
  activeOrder_not_starts_with: String
  activeOrder_ends_with: String
  activeOrder_not_ends_with: String
  orderOwner: Bytes
  orderOwner_not: Bytes
  orderOwner_in: [Bytes!]
  orderOwner_not_in: [Bytes!]
  orderOwner_contains: Bytes
  orderOwner_not_contains: Bytes
  orderPrice: BigInt
  orderPrice_not: BigInt
  orderPrice_gt: BigInt
  orderPrice_lt: BigInt
  orderPrice_gte: BigInt
  orderPrice_lte: BigInt
  orderPrice_in: [BigInt!]
  orderPrice_not_in: [BigInt!]
}

enum Estate_orderBy {
  id
  owner
  operator
  metaData
  land
  orders
  size
  createTransaction
  updatedAt
  activeOrder
  orderOwner
  orderPrice
}

type Invite {
  id: ID!
  inviteBalance: BigInt!
  invites: [BigInt!]!
}

input Invite_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  inviteBalance: BigInt
  inviteBalance_not: BigInt
  inviteBalance_gt: BigInt
  inviteBalance_lt: BigInt
  inviteBalance_gte: BigInt
  inviteBalance_lte: BigInt
  inviteBalance_in: [BigInt!]
  inviteBalance_not_in: [BigInt!]
  invites: [BigInt!]
  invites_not: [BigInt!]
  invites_contains: [BigInt!]
  invites_not_contains: [BigInt!]
}

enum Invite_orderBy {
  id
  inviteBalance
  invites
}

type Mortgage {
  id: ID!
  txHash: Bytes!
  createdAt: BigInt!
  startedAt: BigInt
  lastUpdatedAt: BigInt!
  status: MortgageStatus!
  borrower: User!
  rcnEngine: Bytes!
  loan_id: BigInt!
  landMarket: Bytes!
  landID: BigInt!
  deposit: BigInt!
  tokenConverter: Bytes!
  landCost: BigInt!
  parcel: Parcel
  estate: Estate
  lender: Bytes!
  loanAmount: BigInt!
  dueTime: Int!
}

enum MortgageStatus {
  pending
  cancelled
  ongoing
  paid
  defaulted
}

input Mortgage_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  txHash: Bytes
  txHash_not: Bytes
  txHash_in: [Bytes!]
  txHash_not_in: [Bytes!]
  txHash_contains: Bytes
  txHash_not_contains: Bytes
  createdAt: BigInt
  createdAt_not: BigInt
  createdAt_gt: BigInt
  createdAt_lt: BigInt
  createdAt_gte: BigInt
  createdAt_lte: BigInt
  createdAt_in: [BigInt!]
  createdAt_not_in: [BigInt!]
  startedAt: BigInt
  startedAt_not: BigInt
  startedAt_gt: BigInt
  startedAt_lt: BigInt
  startedAt_gte: BigInt
  startedAt_lte: BigInt
  startedAt_in: [BigInt!]
  startedAt_not_in: [BigInt!]
  lastUpdatedAt: BigInt
  lastUpdatedAt_not: BigInt
  lastUpdatedAt_gt: BigInt
  lastUpdatedAt_lt: BigInt
  lastUpdatedAt_gte: BigInt
  lastUpdatedAt_lte: BigInt
  lastUpdatedAt_in: [BigInt!]
  lastUpdatedAt_not_in: [BigInt!]
  status: MortgageStatus
  status_not: MortgageStatus
  status_in: [MortgageStatus!]
  status_not_in: [MortgageStatus!]
  borrower: String
  borrower_not: String
  borrower_gt: String
  borrower_lt: String
  borrower_gte: String
  borrower_lte: String
  borrower_in: [String!]
  borrower_not_in: [String!]
  borrower_contains: String
  borrower_not_contains: String
  borrower_starts_with: String
  borrower_not_starts_with: String
  borrower_ends_with: String
  borrower_not_ends_with: String
  rcnEngine: Bytes
  rcnEngine_not: Bytes
  rcnEngine_in: [Bytes!]
  rcnEngine_not_in: [Bytes!]
  rcnEngine_contains: Bytes
  rcnEngine_not_contains: Bytes
  loan_id: BigInt
  loan_id_not: BigInt
  loan_id_gt: BigInt
  loan_id_lt: BigInt
  loan_id_gte: BigInt
  loan_id_lte: BigInt
  loan_id_in: [BigInt!]
  loan_id_not_in: [BigInt!]
  landMarket: Bytes
  landMarket_not: Bytes
  landMarket_in: [Bytes!]
  landMarket_not_in: [Bytes!]
  landMarket_contains: Bytes
  landMarket_not_contains: Bytes
  landID: BigInt
  landID_not: BigInt
  landID_gt: BigInt
  landID_lt: BigInt
  landID_gte: BigInt
  landID_lte: BigInt
  landID_in: [BigInt!]
  landID_not_in: [BigInt!]
  deposit: BigInt
  deposit_not: BigInt
  deposit_gt: BigInt
  deposit_lt: BigInt
  deposit_gte: BigInt
  deposit_lte: BigInt
  deposit_in: [BigInt!]
  deposit_not_in: [BigInt!]
  tokenConverter: Bytes
  tokenConverter_not: Bytes
  tokenConverter_in: [Bytes!]
  tokenConverter_not_in: [Bytes!]
  tokenConverter_contains: Bytes
  tokenConverter_not_contains: Bytes
  landCost: BigInt
  landCost_not: BigInt
  landCost_gt: BigInt
  landCost_lt: BigInt
  landCost_gte: BigInt
  landCost_lte: BigInt
  landCost_in: [BigInt!]
  landCost_not_in: [BigInt!]
  parcel: String
  parcel_not: String
  parcel_gt: String
  parcel_lt: String
  parcel_gte: String
  parcel_lte: String
  parcel_in: [String!]
  parcel_not_in: [String!]
  parcel_contains: String
  parcel_not_contains: String
  parcel_starts_with: String
  parcel_not_starts_with: String
  parcel_ends_with: String
  parcel_not_ends_with: String
  estate: String
  estate_not: String
  estate_gt: String
  estate_lt: String
  estate_gte: String
  estate_lte: String
  estate_in: [String!]
  estate_not_in: [String!]
  estate_contains: String
  estate_not_contains: String
  estate_starts_with: String
  estate_not_starts_with: String
  estate_ends_with: String
  estate_not_ends_with: String
  lender: Bytes
  lender_not: Bytes
  lender_in: [Bytes!]
  lender_not_in: [Bytes!]
  lender_contains: Bytes
  lender_not_contains: Bytes
  loanAmount: BigInt
  loanAmount_not: BigInt
  loanAmount_gt: BigInt
  loanAmount_lt: BigInt
  loanAmount_gte: BigInt
  loanAmount_lte: BigInt
  loanAmount_in: [BigInt!]
  loanAmount_not_in: [BigInt!]
  dueTime: Int
  dueTime_not: Int
  dueTime_gt: Int
  dueTime_lt: Int
  dueTime_gte: Int
  dueTime_lte: Int
  dueTime_in: [Int!]
  dueTime_not_in: [Int!]
}

enum Mortgage_orderBy {
  id
  txHash
  createdAt
  startedAt
  lastUpdatedAt
  status
  borrower
  rcnEngine
  loan_id
  landMarket
  landID
  deposit
  tokenConverter
  landCost
  parcel
  estate
  lender
  loanAmount
  dueTime
}

type Order {
  id: ID!
  type: OrderType!
  parcel: Parcel
  estate: Estate
  txHash: Bytes!
  owner: Bytes!
  price: BigInt!
  status: OrderStatus!
  buyer: Bytes
  blockNumber: BigInt!
  expiresAt: BigInt!
  timeCreated: BigInt!
  timeUpdatedAt: BigInt!
  marketplace: Bytes!
  nftAddress: Bytes
}

enum OrderDirection {
  asc
  desc
}

enum OrderStatus {
  open
  sold
  cancelled
}

enum OrderType {
  parcel
  estate
}

input Order_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  type: OrderType
  type_not: OrderType
  type_in: [OrderType!]
  type_not_in: [OrderType!]
  parcel: String
  parcel_not: String
  parcel_gt: String
  parcel_lt: String
  parcel_gte: String
  parcel_lte: String
  parcel_in: [String!]
  parcel_not_in: [String!]
  parcel_contains: String
  parcel_not_contains: String
  parcel_starts_with: String
  parcel_not_starts_with: String
  parcel_ends_with: String
  parcel_not_ends_with: String
  estate: String
  estate_not: String
  estate_gt: String
  estate_lt: String
  estate_gte: String
  estate_lte: String
  estate_in: [String!]
  estate_not_in: [String!]
  estate_contains: String
  estate_not_contains: String
  estate_starts_with: String
  estate_not_starts_with: String
  estate_ends_with: String
  estate_not_ends_with: String
  txHash: Bytes
  txHash_not: Bytes
  txHash_in: [Bytes!]
  txHash_not_in: [Bytes!]
  txHash_contains: Bytes
  txHash_not_contains: Bytes
  owner: Bytes
  owner_not: Bytes
  owner_in: [Bytes!]
  owner_not_in: [Bytes!]
  owner_contains: Bytes
  owner_not_contains: Bytes
  price: BigInt
  price_not: BigInt
  price_gt: BigInt
  price_lt: BigInt
  price_gte: BigInt
  price_lte: BigInt
  price_in: [BigInt!]
  price_not_in: [BigInt!]
  status: OrderStatus
  status_not: OrderStatus
  status_in: [OrderStatus!]
  status_not_in: [OrderStatus!]
  buyer: Bytes
  buyer_not: Bytes
  buyer_in: [Bytes!]
  buyer_not_in: [Bytes!]
  buyer_contains: Bytes
  buyer_not_contains: Bytes
  blockNumber: BigInt
  blockNumber_not: BigInt
  blockNumber_gt: BigInt
  blockNumber_lt: BigInt
  blockNumber_gte: BigInt
  blockNumber_lte: BigInt
  blockNumber_in: [BigInt!]
  blockNumber_not_in: [BigInt!]
  expiresAt: BigInt
  expiresAt_not: BigInt
  expiresAt_gt: BigInt
  expiresAt_lt: BigInt
  expiresAt_gte: BigInt
  expiresAt_lte: BigInt
  expiresAt_in: [BigInt!]
  expiresAt_not_in: [BigInt!]
  timeCreated: BigInt
  timeCreated_not: BigInt
  timeCreated_gt: BigInt
  timeCreated_lt: BigInt
  timeCreated_gte: BigInt
  timeCreated_lte: BigInt
  timeCreated_in: [BigInt!]
  timeCreated_not_in: [BigInt!]
  timeUpdatedAt: BigInt
  timeUpdatedAt_not: BigInt
  timeUpdatedAt_gt: BigInt
  timeUpdatedAt_lt: BigInt
  timeUpdatedAt_gte: BigInt
  timeUpdatedAt_lte: BigInt
  timeUpdatedAt_in: [BigInt!]
  timeUpdatedAt_not_in: [BigInt!]
  marketplace: Bytes
  marketplace_not: Bytes
  marketplace_in: [Bytes!]
  marketplace_not_in: [Bytes!]
  marketplace_contains: Bytes
  marketplace_not_contains: Bytes
  nftAddress: Bytes
  nftAddress_not: Bytes
  nftAddress_in: [Bytes!]
  nftAddress_not_in: [Bytes!]
  nftAddress_contains: Bytes
  nftAddress_not_contains: Bytes
}

enum Order_orderBy {
  id
  type
  parcel
  estate
  txHash
  owner
  price
  status
  buyer
  blockNumber
  expiresAt
  timeCreated
  timeUpdatedAt
  marketplace
  nftAddress
}

type Parcel {
  id: ID!
  idNumber: BigInt!
  x: BigInt!
  y: BigInt!
  estate: Estate
  owner: User!
  data: ParcelData
  orderOwner: Bytes
  orderPrice: BigInt
  activeOrder: Order
  orders(skip: Int = 0, first: Int = 100, orderBy: Order_orderBy, orderDirection: OrderDirection, where: Order_filter): [Order!]
  updatedAt: BigInt!
  operators: [Bytes!]
}

type ParcelData {
  id: ID!
  parcel: Parcel!
  version: String
  name: String
  description: String
  ipns: String
}

input ParcelData_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  parcel: String
  parcel_not: String
  parcel_gt: String
  parcel_lt: String
  parcel_gte: String
  parcel_lte: String
  parcel_in: [String!]
  parcel_not_in: [String!]
  parcel_contains: String
  parcel_not_contains: String
  parcel_starts_with: String
  parcel_not_starts_with: String
  parcel_ends_with: String
  parcel_not_ends_with: String
  version: String
  version_not: String
  version_gt: String
  version_lt: String
  version_gte: String
  version_lte: String
  version_in: [String!]
  version_not_in: [String!]
  version_contains: String
  version_not_contains: String
  version_starts_with: String
  version_not_starts_with: String
  version_ends_with: String
  version_not_ends_with: String
  name: String
  name_not: String
  name_gt: String
  name_lt: String
  name_gte: String
  name_lte: String
  name_in: [String!]
  name_not_in: [String!]
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_gt: String
  description_lt: String
  description_gte: String
  description_lte: String
  description_in: [String!]
  description_not_in: [String!]
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  ipns: String
  ipns_not: String
  ipns_gt: String
  ipns_lt: String
  ipns_gte: String
  ipns_lte: String
  ipns_in: [String!]
  ipns_not_in: [String!]
  ipns_contains: String
  ipns_not_contains: String
  ipns_starts_with: String
  ipns_not_starts_with: String
  ipns_ends_with: String
  ipns_not_ends_with: String
}

enum ParcelData_orderBy {
  id
  parcel
  version
  name
  description
  ipns
}

input Parcel_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  idNumber: BigInt
  idNumber_not: BigInt
  idNumber_gt: BigInt
  idNumber_lt: BigInt
  idNumber_gte: BigInt
  idNumber_lte: BigInt
  idNumber_in: [BigInt!]
  idNumber_not_in: [BigInt!]
  x: BigInt
  x_not: BigInt
  x_gt: BigInt
  x_lt: BigInt
  x_gte: BigInt
  x_lte: BigInt
  x_in: [BigInt!]
  x_not_in: [BigInt!]
  y: BigInt
  y_not: BigInt
  y_gt: BigInt
  y_lt: BigInt
  y_gte: BigInt
  y_lte: BigInt
  y_in: [BigInt!]
  y_not_in: [BigInt!]
  estate: String
  estate_not: String
  estate_gt: String
  estate_lt: String
  estate_gte: String
  estate_lte: String
  estate_in: [String!]
  estate_not_in: [String!]
  estate_contains: String
  estate_not_contains: String
  estate_starts_with: String
  estate_not_starts_with: String
  estate_ends_with: String
  estate_not_ends_with: String
  owner: String
  owner_not: String
  owner_gt: String
  owner_lt: String
  owner_gte: String
  owner_lte: String
  owner_in: [String!]
  owner_not_in: [String!]
  owner_contains: String
  owner_not_contains: String
  owner_starts_with: String
  owner_not_starts_with: String
  owner_ends_with: String
  owner_not_ends_with: String
  data: String
  data_not: String
  data_gt: String
  data_lt: String
  data_gte: String
  data_lte: String
  data_in: [String!]
  data_not_in: [String!]
  data_contains: String
  data_not_contains: String
  data_starts_with: String
  data_not_starts_with: String
  data_ends_with: String
  data_not_ends_with: String
  orderOwner: Bytes
  orderOwner_not: Bytes
  orderOwner_in: [Bytes!]
  orderOwner_not_in: [Bytes!]
  orderOwner_contains: Bytes
  orderOwner_not_contains: Bytes
  orderPrice: BigInt
  orderPrice_not: BigInt
  orderPrice_gt: BigInt
  orderPrice_lt: BigInt
  orderPrice_gte: BigInt
  orderPrice_lte: BigInt
  orderPrice_in: [BigInt!]
  orderPrice_not_in: [BigInt!]
  activeOrder: String
  activeOrder_not: String
  activeOrder_gt: String
  activeOrder_lt: String
  activeOrder_gte: String
  activeOrder_lte: String
  activeOrder_in: [String!]
  activeOrder_not_in: [String!]
  activeOrder_contains: String
  activeOrder_not_contains: String
  activeOrder_starts_with: String
  activeOrder_not_starts_with: String
  activeOrder_ends_with: String
  activeOrder_not_ends_with: String
  updatedAt: BigInt
  updatedAt_not: BigInt
  updatedAt_gt: BigInt
  updatedAt_lt: BigInt
  updatedAt_gte: BigInt
  updatedAt_lte: BigInt
  updatedAt_in: [BigInt!]
  updatedAt_not_in: [BigInt!]
  operators: [Bytes!]
  operators_not: [Bytes!]
  operators_contains: [Bytes!]
  operators_not_contains: [Bytes!]
}

enum Parcel_orderBy {
  id
  idNumber
  x
  y
  estate
  owner
  data
  orderOwner
  orderPrice
  activeOrder
  orders
  updatedAt
  operators
}

type Query {
  decentraland(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Decentraland
  decentralands(
    skip: Int = 0
    first: Int = 100
    orderBy: Decentraland_orderBy
    orderDirection: OrderDirection
    where: Decentraland_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Decentraland!]!
  parcel(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Parcel
  parcels(
    skip: Int = 0
    first: Int = 100
    orderBy: Parcel_orderBy
    orderDirection: OrderDirection
    where: Parcel_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Parcel!]!
  parcelData(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): ParcelData
  parcelDatas(
    skip: Int = 0
    first: Int = 100
    orderBy: ParcelData_orderBy
    orderDirection: OrderDirection
    where: ParcelData_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [ParcelData!]!
  order(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Order
  orders(
    skip: Int = 0
    first: Int = 100
    orderBy: Order_orderBy
    orderDirection: OrderDirection
    where: Order_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Order!]!
  estate(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Estate
  estates(
    skip: Int = 0
    first: Int = 100
    orderBy: Estate_orderBy
    orderDirection: OrderDirection
    where: Estate_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Estate!]!
  mortgage(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Mortgage
  mortgages(
    skip: Int = 0
    first: Int = 100
    orderBy: Mortgage_orderBy
    orderDirection: OrderDirection
    where: Mortgage_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Mortgage!]!
  invite(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Invite
  invites(
    skip: Int = 0
    first: Int = 100
    orderBy: Invite_orderBy
    orderDirection: OrderDirection
    where: Invite_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Invite!]!
  user(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): User
  users(
    skip: Int = 0
    first: Int = 100
    orderBy: User_orderBy
    orderDirection: OrderDirection
    where: User_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [User!]!
  """Access to subgraph metadata"""
  _meta(block: Block_height): _Meta_
}

type Subscription {
  decentraland(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Decentraland
  decentralands(
    skip: Int = 0
    first: Int = 100
    orderBy: Decentraland_orderBy
    orderDirection: OrderDirection
    where: Decentraland_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Decentraland!]!
  parcel(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Parcel
  parcels(
    skip: Int = 0
    first: Int = 100
    orderBy: Parcel_orderBy
    orderDirection: OrderDirection
    where: Parcel_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Parcel!]!
  parcelData(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): ParcelData
  parcelDatas(
    skip: Int = 0
    first: Int = 100
    orderBy: ParcelData_orderBy
    orderDirection: OrderDirection
    where: ParcelData_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [ParcelData!]!
  order(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Order
  orders(
    skip: Int = 0
    first: Int = 100
    orderBy: Order_orderBy
    orderDirection: OrderDirection
    where: Order_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Order!]!
  estate(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Estate
  estates(
    skip: Int = 0
    first: Int = 100
    orderBy: Estate_orderBy
    orderDirection: OrderDirection
    where: Estate_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Estate!]!
  mortgage(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Mortgage
  mortgages(
    skip: Int = 0
    first: Int = 100
    orderBy: Mortgage_orderBy
    orderDirection: OrderDirection
    where: Mortgage_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Mortgage!]!
  invite(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Invite
  invites(
    skip: Int = 0
    first: Int = 100
    orderBy: Invite_orderBy
    orderDirection: OrderDirection
    where: Invite_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Invite!]!
  user(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): User
  users(
    skip: Int = 0
    first: Int = 100
    orderBy: User_orderBy
    orderDirection: OrderDirection
    where: User_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [User!]!
  """Access to subgraph metadata"""
  _meta(block: Block_height): _Meta_
}

type User {
  id: ID!
  parcels(skip: Int = 0, first: Int = 100, orderBy: Parcel_orderBy, orderDirection: OrderDirection, where: Parcel_filter): [Parcel!]
  estates(skip: Int = 0, first: Int = 100, orderBy: Estate_orderBy, orderDirection: OrderDirection, where: Estate_filter): [Estate!]
  mana: BigInt
  mortgages(skip: Int = 0, first: Int = 100, orderBy: Mortgage_orderBy, orderDirection: OrderDirection, where: Mortgage_filter): [Mortgage!]
}

input User_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  mana: BigInt
  mana_not: BigInt
  mana_gt: BigInt
  mana_lt: BigInt
  mana_gte: BigInt
  mana_lte: BigInt
  mana_in: [BigInt!]
  mana_not_in: [BigInt!]
}

enum User_orderBy {
  id
  parcels
  estates
  mana
  mortgages
}

type _Block_ {
  """The hash of the block"""
  hash: Bytes
  """The block number"""
  number: Int!
}

"""The type for the top-level _meta field"""
type _Meta_ {
  """
  Information about a specific subgraph block. The hash of the block
  will be null if the _meta field has a block constraint that asks for
  a block number. It will be filled if the _meta field has no block constraint
  and therefore asks for the latest  block
  
  """
  block: _Block_!
  """The deployment ID"""
  deployment: String!
  """If \`true\`, the subgraph encountered indexing errors at some past block"""
  hasIndexingErrors: Boolean!
}

enum _SubgraphErrorPolicy_ {
  """Data will be returned even if the subgraph has indexing errors"""
  allow
  """If the subgraph has indexing errors, data will be omitted. The default."""
  deny
}

`, `.graphclient/sources/decentraland/schema.graphql`);

export default buildSchema(source, {
  assumeValid: true,
  assumeValidSDL: true
});