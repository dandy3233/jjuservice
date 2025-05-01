
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Dormitory
 * 
 */
export type Dormitory = $Result.DefaultSelection<Prisma.$DormitoryPayload>
/**
 * Model academic
 * 
 */
export type academic = $Result.DefaultSelection<Prisma.$academicPayload>
/**
 * Model complaint
 * 
 */
export type complaint = $Result.DefaultSelection<Prisma.$complaintPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dormitories
 * const dormitories = await prisma.dormitory.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Dormitories
   * const dormitories = await prisma.dormitory.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.dormitory`: Exposes CRUD operations for the **Dormitory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dormitories
    * const dormitories = await prisma.dormitory.findMany()
    * ```
    */
  get dormitory(): Prisma.DormitoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.academic`: Exposes CRUD operations for the **academic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Academics
    * const academics = await prisma.academic.findMany()
    * ```
    */
  get academic(): Prisma.academicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.complaint`: Exposes CRUD operations for the **complaint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Complaints
    * const complaints = await prisma.complaint.findMany()
    * ```
    */
  get complaint(): Prisma.complaintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Dormitory: 'Dormitory',
    academic: 'academic',
    complaint: 'complaint',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "dormitory" | "academic" | "complaint" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Dormitory: {
        payload: Prisma.$DormitoryPayload<ExtArgs>
        fields: Prisma.DormitoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DormitoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DormitoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DormitoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DormitoryPayload>
          }
          findFirst: {
            args: Prisma.DormitoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DormitoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DormitoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DormitoryPayload>
          }
          findMany: {
            args: Prisma.DormitoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DormitoryPayload>[]
          }
          create: {
            args: Prisma.DormitoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DormitoryPayload>
          }
          createMany: {
            args: Prisma.DormitoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DormitoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DormitoryPayload>[]
          }
          delete: {
            args: Prisma.DormitoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DormitoryPayload>
          }
          update: {
            args: Prisma.DormitoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DormitoryPayload>
          }
          deleteMany: {
            args: Prisma.DormitoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DormitoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DormitoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DormitoryPayload>[]
          }
          upsert: {
            args: Prisma.DormitoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DormitoryPayload>
          }
          aggregate: {
            args: Prisma.DormitoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDormitory>
          }
          groupBy: {
            args: Prisma.DormitoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DormitoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DormitoryCountArgs<ExtArgs>
            result: $Utils.Optional<DormitoryCountAggregateOutputType> | number
          }
        }
      }
      academic: {
        payload: Prisma.$academicPayload<ExtArgs>
        fields: Prisma.academicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.academicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.academicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academicPayload>
          }
          findFirst: {
            args: Prisma.academicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.academicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academicPayload>
          }
          findMany: {
            args: Prisma.academicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academicPayload>[]
          }
          create: {
            args: Prisma.academicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academicPayload>
          }
          createMany: {
            args: Prisma.academicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.academicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academicPayload>[]
          }
          delete: {
            args: Prisma.academicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academicPayload>
          }
          update: {
            args: Prisma.academicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academicPayload>
          }
          deleteMany: {
            args: Prisma.academicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.academicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.academicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academicPayload>[]
          }
          upsert: {
            args: Prisma.academicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$academicPayload>
          }
          aggregate: {
            args: Prisma.AcademicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcademic>
          }
          groupBy: {
            args: Prisma.academicGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcademicGroupByOutputType>[]
          }
          count: {
            args: Prisma.academicCountArgs<ExtArgs>
            result: $Utils.Optional<AcademicCountAggregateOutputType> | number
          }
        }
      }
      complaint: {
        payload: Prisma.$complaintPayload<ExtArgs>
        fields: Prisma.complaintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.complaintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.complaintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintPayload>
          }
          findFirst: {
            args: Prisma.complaintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.complaintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintPayload>
          }
          findMany: {
            args: Prisma.complaintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintPayload>[]
          }
          create: {
            args: Prisma.complaintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintPayload>
          }
          createMany: {
            args: Prisma.complaintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.complaintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintPayload>[]
          }
          delete: {
            args: Prisma.complaintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintPayload>
          }
          update: {
            args: Prisma.complaintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintPayload>
          }
          deleteMany: {
            args: Prisma.complaintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.complaintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.complaintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintPayload>[]
          }
          upsert: {
            args: Prisma.complaintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$complaintPayload>
          }
          aggregate: {
            args: Prisma.ComplaintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComplaint>
          }
          groupBy: {
            args: Prisma.complaintGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComplaintGroupByOutputType>[]
          }
          count: {
            args: Prisma.complaintCountArgs<ExtArgs>
            result: $Utils.Optional<ComplaintCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    dormitory?: DormitoryOmit
    academic?: academicOmit
    complaint?: complaintOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Dormitory
   */

  export type AggregateDormitory = {
    _count: DormitoryCountAggregateOutputType | null
    _avg: DormitoryAvgAggregateOutputType | null
    _sum: DormitorySumAggregateOutputType | null
    _min: DormitoryMinAggregateOutputType | null
    _max: DormitoryMaxAggregateOutputType | null
  }

  export type DormitoryAvgAggregateOutputType = {
    id: number | null
  }

  export type DormitorySumAggregateOutputType = {
    id: number | null
  }

  export type DormitoryMinAggregateOutputType = {
    id: number | null
    block_no: string | null
    dorm_no: string | null
    problem_type: string | null
    problem_description: string | null
    submission_date: Date | null
  }

  export type DormitoryMaxAggregateOutputType = {
    id: number | null
    block_no: string | null
    dorm_no: string | null
    problem_type: string | null
    problem_description: string | null
    submission_date: Date | null
  }

  export type DormitoryCountAggregateOutputType = {
    id: number
    block_no: number
    dorm_no: number
    problem_type: number
    problem_description: number
    submission_date: number
    _all: number
  }


  export type DormitoryAvgAggregateInputType = {
    id?: true
  }

  export type DormitorySumAggregateInputType = {
    id?: true
  }

  export type DormitoryMinAggregateInputType = {
    id?: true
    block_no?: true
    dorm_no?: true
    problem_type?: true
    problem_description?: true
    submission_date?: true
  }

  export type DormitoryMaxAggregateInputType = {
    id?: true
    block_no?: true
    dorm_no?: true
    problem_type?: true
    problem_description?: true
    submission_date?: true
  }

  export type DormitoryCountAggregateInputType = {
    id?: true
    block_no?: true
    dorm_no?: true
    problem_type?: true
    problem_description?: true
    submission_date?: true
    _all?: true
  }

  export type DormitoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dormitory to aggregate.
     */
    where?: DormitoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dormitories to fetch.
     */
    orderBy?: DormitoryOrderByWithRelationInput | DormitoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DormitoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dormitories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dormitories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dormitories
    **/
    _count?: true | DormitoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DormitoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DormitorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DormitoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DormitoryMaxAggregateInputType
  }

  export type GetDormitoryAggregateType<T extends DormitoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDormitory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDormitory[P]>
      : GetScalarType<T[P], AggregateDormitory[P]>
  }




  export type DormitoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DormitoryWhereInput
    orderBy?: DormitoryOrderByWithAggregationInput | DormitoryOrderByWithAggregationInput[]
    by: DormitoryScalarFieldEnum[] | DormitoryScalarFieldEnum
    having?: DormitoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DormitoryCountAggregateInputType | true
    _avg?: DormitoryAvgAggregateInputType
    _sum?: DormitorySumAggregateInputType
    _min?: DormitoryMinAggregateInputType
    _max?: DormitoryMaxAggregateInputType
  }

  export type DormitoryGroupByOutputType = {
    id: number
    block_no: string
    dorm_no: string
    problem_type: string
    problem_description: string
    submission_date: Date
    _count: DormitoryCountAggregateOutputType | null
    _avg: DormitoryAvgAggregateOutputType | null
    _sum: DormitorySumAggregateOutputType | null
    _min: DormitoryMinAggregateOutputType | null
    _max: DormitoryMaxAggregateOutputType | null
  }

  type GetDormitoryGroupByPayload<T extends DormitoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DormitoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DormitoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DormitoryGroupByOutputType[P]>
            : GetScalarType<T[P], DormitoryGroupByOutputType[P]>
        }
      >
    >


  export type DormitorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    block_no?: boolean
    dorm_no?: boolean
    problem_type?: boolean
    problem_description?: boolean
    submission_date?: boolean
  }, ExtArgs["result"]["dormitory"]>

  export type DormitorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    block_no?: boolean
    dorm_no?: boolean
    problem_type?: boolean
    problem_description?: boolean
    submission_date?: boolean
  }, ExtArgs["result"]["dormitory"]>

  export type DormitorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    block_no?: boolean
    dorm_no?: boolean
    problem_type?: boolean
    problem_description?: boolean
    submission_date?: boolean
  }, ExtArgs["result"]["dormitory"]>

  export type DormitorySelectScalar = {
    id?: boolean
    block_no?: boolean
    dorm_no?: boolean
    problem_type?: boolean
    problem_description?: boolean
    submission_date?: boolean
  }

  export type DormitoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "block_no" | "dorm_no" | "problem_type" | "problem_description" | "submission_date", ExtArgs["result"]["dormitory"]>

  export type $DormitoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dormitory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      block_no: string
      dorm_no: string
      problem_type: string
      problem_description: string
      submission_date: Date
    }, ExtArgs["result"]["dormitory"]>
    composites: {}
  }

  type DormitoryGetPayload<S extends boolean | null | undefined | DormitoryDefaultArgs> = $Result.GetResult<Prisma.$DormitoryPayload, S>

  type DormitoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DormitoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DormitoryCountAggregateInputType | true
    }

  export interface DormitoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dormitory'], meta: { name: 'Dormitory' } }
    /**
     * Find zero or one Dormitory that matches the filter.
     * @param {DormitoryFindUniqueArgs} args - Arguments to find a Dormitory
     * @example
     * // Get one Dormitory
     * const dormitory = await prisma.dormitory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DormitoryFindUniqueArgs>(args: SelectSubset<T, DormitoryFindUniqueArgs<ExtArgs>>): Prisma__DormitoryClient<$Result.GetResult<Prisma.$DormitoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dormitory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DormitoryFindUniqueOrThrowArgs} args - Arguments to find a Dormitory
     * @example
     * // Get one Dormitory
     * const dormitory = await prisma.dormitory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DormitoryFindUniqueOrThrowArgs>(args: SelectSubset<T, DormitoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DormitoryClient<$Result.GetResult<Prisma.$DormitoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dormitory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DormitoryFindFirstArgs} args - Arguments to find a Dormitory
     * @example
     * // Get one Dormitory
     * const dormitory = await prisma.dormitory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DormitoryFindFirstArgs>(args?: SelectSubset<T, DormitoryFindFirstArgs<ExtArgs>>): Prisma__DormitoryClient<$Result.GetResult<Prisma.$DormitoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dormitory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DormitoryFindFirstOrThrowArgs} args - Arguments to find a Dormitory
     * @example
     * // Get one Dormitory
     * const dormitory = await prisma.dormitory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DormitoryFindFirstOrThrowArgs>(args?: SelectSubset<T, DormitoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DormitoryClient<$Result.GetResult<Prisma.$DormitoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dormitories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DormitoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dormitories
     * const dormitories = await prisma.dormitory.findMany()
     * 
     * // Get first 10 Dormitories
     * const dormitories = await prisma.dormitory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dormitoryWithIdOnly = await prisma.dormitory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DormitoryFindManyArgs>(args?: SelectSubset<T, DormitoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DormitoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dormitory.
     * @param {DormitoryCreateArgs} args - Arguments to create a Dormitory.
     * @example
     * // Create one Dormitory
     * const Dormitory = await prisma.dormitory.create({
     *   data: {
     *     // ... data to create a Dormitory
     *   }
     * })
     * 
     */
    create<T extends DormitoryCreateArgs>(args: SelectSubset<T, DormitoryCreateArgs<ExtArgs>>): Prisma__DormitoryClient<$Result.GetResult<Prisma.$DormitoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dormitories.
     * @param {DormitoryCreateManyArgs} args - Arguments to create many Dormitories.
     * @example
     * // Create many Dormitories
     * const dormitory = await prisma.dormitory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DormitoryCreateManyArgs>(args?: SelectSubset<T, DormitoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dormitories and returns the data saved in the database.
     * @param {DormitoryCreateManyAndReturnArgs} args - Arguments to create many Dormitories.
     * @example
     * // Create many Dormitories
     * const dormitory = await prisma.dormitory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dormitories and only return the `id`
     * const dormitoryWithIdOnly = await prisma.dormitory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DormitoryCreateManyAndReturnArgs>(args?: SelectSubset<T, DormitoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DormitoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dormitory.
     * @param {DormitoryDeleteArgs} args - Arguments to delete one Dormitory.
     * @example
     * // Delete one Dormitory
     * const Dormitory = await prisma.dormitory.delete({
     *   where: {
     *     // ... filter to delete one Dormitory
     *   }
     * })
     * 
     */
    delete<T extends DormitoryDeleteArgs>(args: SelectSubset<T, DormitoryDeleteArgs<ExtArgs>>): Prisma__DormitoryClient<$Result.GetResult<Prisma.$DormitoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dormitory.
     * @param {DormitoryUpdateArgs} args - Arguments to update one Dormitory.
     * @example
     * // Update one Dormitory
     * const dormitory = await prisma.dormitory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DormitoryUpdateArgs>(args: SelectSubset<T, DormitoryUpdateArgs<ExtArgs>>): Prisma__DormitoryClient<$Result.GetResult<Prisma.$DormitoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dormitories.
     * @param {DormitoryDeleteManyArgs} args - Arguments to filter Dormitories to delete.
     * @example
     * // Delete a few Dormitories
     * const { count } = await prisma.dormitory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DormitoryDeleteManyArgs>(args?: SelectSubset<T, DormitoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dormitories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DormitoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dormitories
     * const dormitory = await prisma.dormitory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DormitoryUpdateManyArgs>(args: SelectSubset<T, DormitoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dormitories and returns the data updated in the database.
     * @param {DormitoryUpdateManyAndReturnArgs} args - Arguments to update many Dormitories.
     * @example
     * // Update many Dormitories
     * const dormitory = await prisma.dormitory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dormitories and only return the `id`
     * const dormitoryWithIdOnly = await prisma.dormitory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DormitoryUpdateManyAndReturnArgs>(args: SelectSubset<T, DormitoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DormitoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dormitory.
     * @param {DormitoryUpsertArgs} args - Arguments to update or create a Dormitory.
     * @example
     * // Update or create a Dormitory
     * const dormitory = await prisma.dormitory.upsert({
     *   create: {
     *     // ... data to create a Dormitory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dormitory we want to update
     *   }
     * })
     */
    upsert<T extends DormitoryUpsertArgs>(args: SelectSubset<T, DormitoryUpsertArgs<ExtArgs>>): Prisma__DormitoryClient<$Result.GetResult<Prisma.$DormitoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dormitories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DormitoryCountArgs} args - Arguments to filter Dormitories to count.
     * @example
     * // Count the number of Dormitories
     * const count = await prisma.dormitory.count({
     *   where: {
     *     // ... the filter for the Dormitories we want to count
     *   }
     * })
    **/
    count<T extends DormitoryCountArgs>(
      args?: Subset<T, DormitoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DormitoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dormitory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DormitoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DormitoryAggregateArgs>(args: Subset<T, DormitoryAggregateArgs>): Prisma.PrismaPromise<GetDormitoryAggregateType<T>>

    /**
     * Group by Dormitory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DormitoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DormitoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DormitoryGroupByArgs['orderBy'] }
        : { orderBy?: DormitoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DormitoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDormitoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dormitory model
   */
  readonly fields: DormitoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dormitory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DormitoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dormitory model
   */
  interface DormitoryFieldRefs {
    readonly id: FieldRef<"Dormitory", 'Int'>
    readonly block_no: FieldRef<"Dormitory", 'String'>
    readonly dorm_no: FieldRef<"Dormitory", 'String'>
    readonly problem_type: FieldRef<"Dormitory", 'String'>
    readonly problem_description: FieldRef<"Dormitory", 'String'>
    readonly submission_date: FieldRef<"Dormitory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dormitory findUnique
   */
  export type DormitoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dormitory
     */
    select?: DormitorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dormitory
     */
    omit?: DormitoryOmit<ExtArgs> | null
    /**
     * Filter, which Dormitory to fetch.
     */
    where: DormitoryWhereUniqueInput
  }

  /**
   * Dormitory findUniqueOrThrow
   */
  export type DormitoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dormitory
     */
    select?: DormitorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dormitory
     */
    omit?: DormitoryOmit<ExtArgs> | null
    /**
     * Filter, which Dormitory to fetch.
     */
    where: DormitoryWhereUniqueInput
  }

  /**
   * Dormitory findFirst
   */
  export type DormitoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dormitory
     */
    select?: DormitorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dormitory
     */
    omit?: DormitoryOmit<ExtArgs> | null
    /**
     * Filter, which Dormitory to fetch.
     */
    where?: DormitoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dormitories to fetch.
     */
    orderBy?: DormitoryOrderByWithRelationInput | DormitoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dormitories.
     */
    cursor?: DormitoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dormitories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dormitories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dormitories.
     */
    distinct?: DormitoryScalarFieldEnum | DormitoryScalarFieldEnum[]
  }

  /**
   * Dormitory findFirstOrThrow
   */
  export type DormitoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dormitory
     */
    select?: DormitorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dormitory
     */
    omit?: DormitoryOmit<ExtArgs> | null
    /**
     * Filter, which Dormitory to fetch.
     */
    where?: DormitoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dormitories to fetch.
     */
    orderBy?: DormitoryOrderByWithRelationInput | DormitoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dormitories.
     */
    cursor?: DormitoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dormitories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dormitories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dormitories.
     */
    distinct?: DormitoryScalarFieldEnum | DormitoryScalarFieldEnum[]
  }

  /**
   * Dormitory findMany
   */
  export type DormitoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dormitory
     */
    select?: DormitorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dormitory
     */
    omit?: DormitoryOmit<ExtArgs> | null
    /**
     * Filter, which Dormitories to fetch.
     */
    where?: DormitoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dormitories to fetch.
     */
    orderBy?: DormitoryOrderByWithRelationInput | DormitoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dormitories.
     */
    cursor?: DormitoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dormitories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dormitories.
     */
    skip?: number
    distinct?: DormitoryScalarFieldEnum | DormitoryScalarFieldEnum[]
  }

  /**
   * Dormitory create
   */
  export type DormitoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dormitory
     */
    select?: DormitorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dormitory
     */
    omit?: DormitoryOmit<ExtArgs> | null
    /**
     * The data needed to create a Dormitory.
     */
    data: XOR<DormitoryCreateInput, DormitoryUncheckedCreateInput>
  }

  /**
   * Dormitory createMany
   */
  export type DormitoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dormitories.
     */
    data: DormitoryCreateManyInput | DormitoryCreateManyInput[]
  }

  /**
   * Dormitory createManyAndReturn
   */
  export type DormitoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dormitory
     */
    select?: DormitorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dormitory
     */
    omit?: DormitoryOmit<ExtArgs> | null
    /**
     * The data used to create many Dormitories.
     */
    data: DormitoryCreateManyInput | DormitoryCreateManyInput[]
  }

  /**
   * Dormitory update
   */
  export type DormitoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dormitory
     */
    select?: DormitorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dormitory
     */
    omit?: DormitoryOmit<ExtArgs> | null
    /**
     * The data needed to update a Dormitory.
     */
    data: XOR<DormitoryUpdateInput, DormitoryUncheckedUpdateInput>
    /**
     * Choose, which Dormitory to update.
     */
    where: DormitoryWhereUniqueInput
  }

  /**
   * Dormitory updateMany
   */
  export type DormitoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dormitories.
     */
    data: XOR<DormitoryUpdateManyMutationInput, DormitoryUncheckedUpdateManyInput>
    /**
     * Filter which Dormitories to update
     */
    where?: DormitoryWhereInput
    /**
     * Limit how many Dormitories to update.
     */
    limit?: number
  }

  /**
   * Dormitory updateManyAndReturn
   */
  export type DormitoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dormitory
     */
    select?: DormitorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dormitory
     */
    omit?: DormitoryOmit<ExtArgs> | null
    /**
     * The data used to update Dormitories.
     */
    data: XOR<DormitoryUpdateManyMutationInput, DormitoryUncheckedUpdateManyInput>
    /**
     * Filter which Dormitories to update
     */
    where?: DormitoryWhereInput
    /**
     * Limit how many Dormitories to update.
     */
    limit?: number
  }

  /**
   * Dormitory upsert
   */
  export type DormitoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dormitory
     */
    select?: DormitorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dormitory
     */
    omit?: DormitoryOmit<ExtArgs> | null
    /**
     * The filter to search for the Dormitory to update in case it exists.
     */
    where: DormitoryWhereUniqueInput
    /**
     * In case the Dormitory found by the `where` argument doesn't exist, create a new Dormitory with this data.
     */
    create: XOR<DormitoryCreateInput, DormitoryUncheckedCreateInput>
    /**
     * In case the Dormitory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DormitoryUpdateInput, DormitoryUncheckedUpdateInput>
  }

  /**
   * Dormitory delete
   */
  export type DormitoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dormitory
     */
    select?: DormitorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dormitory
     */
    omit?: DormitoryOmit<ExtArgs> | null
    /**
     * Filter which Dormitory to delete.
     */
    where: DormitoryWhereUniqueInput
  }

  /**
   * Dormitory deleteMany
   */
  export type DormitoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dormitories to delete
     */
    where?: DormitoryWhereInput
    /**
     * Limit how many Dormitories to delete.
     */
    limit?: number
  }

  /**
   * Dormitory without action
   */
  export type DormitoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dormitory
     */
    select?: DormitorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dormitory
     */
    omit?: DormitoryOmit<ExtArgs> | null
  }


  /**
   * Model academic
   */

  export type AggregateAcademic = {
    _count: AcademicCountAggregateOutputType | null
    _avg: AcademicAvgAggregateOutputType | null
    _sum: AcademicSumAggregateOutputType | null
    _min: AcademicMinAggregateOutputType | null
    _max: AcademicMaxAggregateOutputType | null
  }

  export type AcademicAvgAggregateOutputType = {
    id: number | null
  }

  export type AcademicSumAggregateOutputType = {
    id: number | null
  }

  export type AcademicMinAggregateOutputType = {
    id: number | null
    full_name: string | null
    id_no: string | null
    department: string | null
    problem_description: string | null
    submission_date: Date | null
  }

  export type AcademicMaxAggregateOutputType = {
    id: number | null
    full_name: string | null
    id_no: string | null
    department: string | null
    problem_description: string | null
    submission_date: Date | null
  }

  export type AcademicCountAggregateOutputType = {
    id: number
    full_name: number
    id_no: number
    department: number
    problem_description: number
    submission_date: number
    _all: number
  }


  export type AcademicAvgAggregateInputType = {
    id?: true
  }

  export type AcademicSumAggregateInputType = {
    id?: true
  }

  export type AcademicMinAggregateInputType = {
    id?: true
    full_name?: true
    id_no?: true
    department?: true
    problem_description?: true
    submission_date?: true
  }

  export type AcademicMaxAggregateInputType = {
    id?: true
    full_name?: true
    id_no?: true
    department?: true
    problem_description?: true
    submission_date?: true
  }

  export type AcademicCountAggregateInputType = {
    id?: true
    full_name?: true
    id_no?: true
    department?: true
    problem_description?: true
    submission_date?: true
    _all?: true
  }

  export type AcademicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which academic to aggregate.
     */
    where?: academicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of academics to fetch.
     */
    orderBy?: academicOrderByWithRelationInput | academicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: academicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` academics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` academics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned academics
    **/
    _count?: true | AcademicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AcademicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AcademicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcademicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcademicMaxAggregateInputType
  }

  export type GetAcademicAggregateType<T extends AcademicAggregateArgs> = {
        [P in keyof T & keyof AggregateAcademic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcademic[P]>
      : GetScalarType<T[P], AggregateAcademic[P]>
  }




  export type academicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: academicWhereInput
    orderBy?: academicOrderByWithAggregationInput | academicOrderByWithAggregationInput[]
    by: AcademicScalarFieldEnum[] | AcademicScalarFieldEnum
    having?: academicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcademicCountAggregateInputType | true
    _avg?: AcademicAvgAggregateInputType
    _sum?: AcademicSumAggregateInputType
    _min?: AcademicMinAggregateInputType
    _max?: AcademicMaxAggregateInputType
  }

  export type AcademicGroupByOutputType = {
    id: number
    full_name: string
    id_no: string
    department: string
    problem_description: string
    submission_date: Date
    _count: AcademicCountAggregateOutputType | null
    _avg: AcademicAvgAggregateOutputType | null
    _sum: AcademicSumAggregateOutputType | null
    _min: AcademicMinAggregateOutputType | null
    _max: AcademicMaxAggregateOutputType | null
  }

  type GetAcademicGroupByPayload<T extends academicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcademicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcademicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcademicGroupByOutputType[P]>
            : GetScalarType<T[P], AcademicGroupByOutputType[P]>
        }
      >
    >


  export type academicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    id_no?: boolean
    department?: boolean
    problem_description?: boolean
    submission_date?: boolean
  }, ExtArgs["result"]["academic"]>

  export type academicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    id_no?: boolean
    department?: boolean
    problem_description?: boolean
    submission_date?: boolean
  }, ExtArgs["result"]["academic"]>

  export type academicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    id_no?: boolean
    department?: boolean
    problem_description?: boolean
    submission_date?: boolean
  }, ExtArgs["result"]["academic"]>

  export type academicSelectScalar = {
    id?: boolean
    full_name?: boolean
    id_no?: boolean
    department?: boolean
    problem_description?: boolean
    submission_date?: boolean
  }

  export type academicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "id_no" | "department" | "problem_description" | "submission_date", ExtArgs["result"]["academic"]>

  export type $academicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "academic"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      full_name: string
      id_no: string
      department: string
      problem_description: string
      submission_date: Date
    }, ExtArgs["result"]["academic"]>
    composites: {}
  }

  type academicGetPayload<S extends boolean | null | undefined | academicDefaultArgs> = $Result.GetResult<Prisma.$academicPayload, S>

  type academicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<academicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcademicCountAggregateInputType | true
    }

  export interface academicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['academic'], meta: { name: 'academic' } }
    /**
     * Find zero or one Academic that matches the filter.
     * @param {academicFindUniqueArgs} args - Arguments to find a Academic
     * @example
     * // Get one Academic
     * const academic = await prisma.academic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends academicFindUniqueArgs>(args: SelectSubset<T, academicFindUniqueArgs<ExtArgs>>): Prisma__academicClient<$Result.GetResult<Prisma.$academicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Academic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {academicFindUniqueOrThrowArgs} args - Arguments to find a Academic
     * @example
     * // Get one Academic
     * const academic = await prisma.academic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends academicFindUniqueOrThrowArgs>(args: SelectSubset<T, academicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__academicClient<$Result.GetResult<Prisma.$academicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Academic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {academicFindFirstArgs} args - Arguments to find a Academic
     * @example
     * // Get one Academic
     * const academic = await prisma.academic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends academicFindFirstArgs>(args?: SelectSubset<T, academicFindFirstArgs<ExtArgs>>): Prisma__academicClient<$Result.GetResult<Prisma.$academicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Academic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {academicFindFirstOrThrowArgs} args - Arguments to find a Academic
     * @example
     * // Get one Academic
     * const academic = await prisma.academic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends academicFindFirstOrThrowArgs>(args?: SelectSubset<T, academicFindFirstOrThrowArgs<ExtArgs>>): Prisma__academicClient<$Result.GetResult<Prisma.$academicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Academics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {academicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Academics
     * const academics = await prisma.academic.findMany()
     * 
     * // Get first 10 Academics
     * const academics = await prisma.academic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const academicWithIdOnly = await prisma.academic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends academicFindManyArgs>(args?: SelectSubset<T, academicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$academicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Academic.
     * @param {academicCreateArgs} args - Arguments to create a Academic.
     * @example
     * // Create one Academic
     * const Academic = await prisma.academic.create({
     *   data: {
     *     // ... data to create a Academic
     *   }
     * })
     * 
     */
    create<T extends academicCreateArgs>(args: SelectSubset<T, academicCreateArgs<ExtArgs>>): Prisma__academicClient<$Result.GetResult<Prisma.$academicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Academics.
     * @param {academicCreateManyArgs} args - Arguments to create many Academics.
     * @example
     * // Create many Academics
     * const academic = await prisma.academic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends academicCreateManyArgs>(args?: SelectSubset<T, academicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Academics and returns the data saved in the database.
     * @param {academicCreateManyAndReturnArgs} args - Arguments to create many Academics.
     * @example
     * // Create many Academics
     * const academic = await prisma.academic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Academics and only return the `id`
     * const academicWithIdOnly = await prisma.academic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends academicCreateManyAndReturnArgs>(args?: SelectSubset<T, academicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$academicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Academic.
     * @param {academicDeleteArgs} args - Arguments to delete one Academic.
     * @example
     * // Delete one Academic
     * const Academic = await prisma.academic.delete({
     *   where: {
     *     // ... filter to delete one Academic
     *   }
     * })
     * 
     */
    delete<T extends academicDeleteArgs>(args: SelectSubset<T, academicDeleteArgs<ExtArgs>>): Prisma__academicClient<$Result.GetResult<Prisma.$academicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Academic.
     * @param {academicUpdateArgs} args - Arguments to update one Academic.
     * @example
     * // Update one Academic
     * const academic = await prisma.academic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends academicUpdateArgs>(args: SelectSubset<T, academicUpdateArgs<ExtArgs>>): Prisma__academicClient<$Result.GetResult<Prisma.$academicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Academics.
     * @param {academicDeleteManyArgs} args - Arguments to filter Academics to delete.
     * @example
     * // Delete a few Academics
     * const { count } = await prisma.academic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends academicDeleteManyArgs>(args?: SelectSubset<T, academicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Academics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {academicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Academics
     * const academic = await prisma.academic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends academicUpdateManyArgs>(args: SelectSubset<T, academicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Academics and returns the data updated in the database.
     * @param {academicUpdateManyAndReturnArgs} args - Arguments to update many Academics.
     * @example
     * // Update many Academics
     * const academic = await prisma.academic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Academics and only return the `id`
     * const academicWithIdOnly = await prisma.academic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends academicUpdateManyAndReturnArgs>(args: SelectSubset<T, academicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$academicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Academic.
     * @param {academicUpsertArgs} args - Arguments to update or create a Academic.
     * @example
     * // Update or create a Academic
     * const academic = await prisma.academic.upsert({
     *   create: {
     *     // ... data to create a Academic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Academic we want to update
     *   }
     * })
     */
    upsert<T extends academicUpsertArgs>(args: SelectSubset<T, academicUpsertArgs<ExtArgs>>): Prisma__academicClient<$Result.GetResult<Prisma.$academicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Academics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {academicCountArgs} args - Arguments to filter Academics to count.
     * @example
     * // Count the number of Academics
     * const count = await prisma.academic.count({
     *   where: {
     *     // ... the filter for the Academics we want to count
     *   }
     * })
    **/
    count<T extends academicCountArgs>(
      args?: Subset<T, academicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcademicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Academic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AcademicAggregateArgs>(args: Subset<T, AcademicAggregateArgs>): Prisma.PrismaPromise<GetAcademicAggregateType<T>>

    /**
     * Group by Academic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {academicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends academicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: academicGroupByArgs['orderBy'] }
        : { orderBy?: academicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, academicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcademicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the academic model
   */
  readonly fields: academicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for academic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__academicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the academic model
   */
  interface academicFieldRefs {
    readonly id: FieldRef<"academic", 'Int'>
    readonly full_name: FieldRef<"academic", 'String'>
    readonly id_no: FieldRef<"academic", 'String'>
    readonly department: FieldRef<"academic", 'String'>
    readonly problem_description: FieldRef<"academic", 'String'>
    readonly submission_date: FieldRef<"academic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * academic findUnique
   */
  export type academicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic
     */
    select?: academicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic
     */
    omit?: academicOmit<ExtArgs> | null
    /**
     * Filter, which academic to fetch.
     */
    where: academicWhereUniqueInput
  }

  /**
   * academic findUniqueOrThrow
   */
  export type academicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic
     */
    select?: academicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic
     */
    omit?: academicOmit<ExtArgs> | null
    /**
     * Filter, which academic to fetch.
     */
    where: academicWhereUniqueInput
  }

  /**
   * academic findFirst
   */
  export type academicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic
     */
    select?: academicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic
     */
    omit?: academicOmit<ExtArgs> | null
    /**
     * Filter, which academic to fetch.
     */
    where?: academicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of academics to fetch.
     */
    orderBy?: academicOrderByWithRelationInput | academicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for academics.
     */
    cursor?: academicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` academics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` academics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of academics.
     */
    distinct?: AcademicScalarFieldEnum | AcademicScalarFieldEnum[]
  }

  /**
   * academic findFirstOrThrow
   */
  export type academicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic
     */
    select?: academicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic
     */
    omit?: academicOmit<ExtArgs> | null
    /**
     * Filter, which academic to fetch.
     */
    where?: academicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of academics to fetch.
     */
    orderBy?: academicOrderByWithRelationInput | academicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for academics.
     */
    cursor?: academicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` academics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` academics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of academics.
     */
    distinct?: AcademicScalarFieldEnum | AcademicScalarFieldEnum[]
  }

  /**
   * academic findMany
   */
  export type academicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic
     */
    select?: academicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic
     */
    omit?: academicOmit<ExtArgs> | null
    /**
     * Filter, which academics to fetch.
     */
    where?: academicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of academics to fetch.
     */
    orderBy?: academicOrderByWithRelationInput | academicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing academics.
     */
    cursor?: academicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` academics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` academics.
     */
    skip?: number
    distinct?: AcademicScalarFieldEnum | AcademicScalarFieldEnum[]
  }

  /**
   * academic create
   */
  export type academicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic
     */
    select?: academicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic
     */
    omit?: academicOmit<ExtArgs> | null
    /**
     * The data needed to create a academic.
     */
    data: XOR<academicCreateInput, academicUncheckedCreateInput>
  }

  /**
   * academic createMany
   */
  export type academicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many academics.
     */
    data: academicCreateManyInput | academicCreateManyInput[]
  }

  /**
   * academic createManyAndReturn
   */
  export type academicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic
     */
    select?: academicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the academic
     */
    omit?: academicOmit<ExtArgs> | null
    /**
     * The data used to create many academics.
     */
    data: academicCreateManyInput | academicCreateManyInput[]
  }

  /**
   * academic update
   */
  export type academicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic
     */
    select?: academicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic
     */
    omit?: academicOmit<ExtArgs> | null
    /**
     * The data needed to update a academic.
     */
    data: XOR<academicUpdateInput, academicUncheckedUpdateInput>
    /**
     * Choose, which academic to update.
     */
    where: academicWhereUniqueInput
  }

  /**
   * academic updateMany
   */
  export type academicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update academics.
     */
    data: XOR<academicUpdateManyMutationInput, academicUncheckedUpdateManyInput>
    /**
     * Filter which academics to update
     */
    where?: academicWhereInput
    /**
     * Limit how many academics to update.
     */
    limit?: number
  }

  /**
   * academic updateManyAndReturn
   */
  export type academicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic
     */
    select?: academicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the academic
     */
    omit?: academicOmit<ExtArgs> | null
    /**
     * The data used to update academics.
     */
    data: XOR<academicUpdateManyMutationInput, academicUncheckedUpdateManyInput>
    /**
     * Filter which academics to update
     */
    where?: academicWhereInput
    /**
     * Limit how many academics to update.
     */
    limit?: number
  }

  /**
   * academic upsert
   */
  export type academicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic
     */
    select?: academicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic
     */
    omit?: academicOmit<ExtArgs> | null
    /**
     * The filter to search for the academic to update in case it exists.
     */
    where: academicWhereUniqueInput
    /**
     * In case the academic found by the `where` argument doesn't exist, create a new academic with this data.
     */
    create: XOR<academicCreateInput, academicUncheckedCreateInput>
    /**
     * In case the academic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<academicUpdateInput, academicUncheckedUpdateInput>
  }

  /**
   * academic delete
   */
  export type academicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic
     */
    select?: academicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic
     */
    omit?: academicOmit<ExtArgs> | null
    /**
     * Filter which academic to delete.
     */
    where: academicWhereUniqueInput
  }

  /**
   * academic deleteMany
   */
  export type academicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which academics to delete
     */
    where?: academicWhereInput
    /**
     * Limit how many academics to delete.
     */
    limit?: number
  }

  /**
   * academic without action
   */
  export type academicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the academic
     */
    select?: academicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the academic
     */
    omit?: academicOmit<ExtArgs> | null
  }


  /**
   * Model complaint
   */

  export type AggregateComplaint = {
    _count: ComplaintCountAggregateOutputType | null
    _avg: ComplaintAvgAggregateOutputType | null
    _sum: ComplaintSumAggregateOutputType | null
    _min: ComplaintMinAggregateOutputType | null
    _max: ComplaintMaxAggregateOutputType | null
  }

  export type ComplaintAvgAggregateOutputType = {
    id: number | null
  }

  export type ComplaintSumAggregateOutputType = {
    id: number | null
  }

  export type ComplaintMinAggregateOutputType = {
    id: number | null
    id_no: string | null
    subject: string | null
    complaint_text: string | null
    submission_date: Date | null
  }

  export type ComplaintMaxAggregateOutputType = {
    id: number | null
    id_no: string | null
    subject: string | null
    complaint_text: string | null
    submission_date: Date | null
  }

  export type ComplaintCountAggregateOutputType = {
    id: number
    id_no: number
    subject: number
    complaint_text: number
    submission_date: number
    _all: number
  }


  export type ComplaintAvgAggregateInputType = {
    id?: true
  }

  export type ComplaintSumAggregateInputType = {
    id?: true
  }

  export type ComplaintMinAggregateInputType = {
    id?: true
    id_no?: true
    subject?: true
    complaint_text?: true
    submission_date?: true
  }

  export type ComplaintMaxAggregateInputType = {
    id?: true
    id_no?: true
    subject?: true
    complaint_text?: true
    submission_date?: true
  }

  export type ComplaintCountAggregateInputType = {
    id?: true
    id_no?: true
    subject?: true
    complaint_text?: true
    submission_date?: true
    _all?: true
  }

  export type ComplaintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which complaint to aggregate.
     */
    where?: complaintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of complaints to fetch.
     */
    orderBy?: complaintOrderByWithRelationInput | complaintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: complaintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` complaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned complaints
    **/
    _count?: true | ComplaintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComplaintAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComplaintSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComplaintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComplaintMaxAggregateInputType
  }

  export type GetComplaintAggregateType<T extends ComplaintAggregateArgs> = {
        [P in keyof T & keyof AggregateComplaint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComplaint[P]>
      : GetScalarType<T[P], AggregateComplaint[P]>
  }




  export type complaintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: complaintWhereInput
    orderBy?: complaintOrderByWithAggregationInput | complaintOrderByWithAggregationInput[]
    by: ComplaintScalarFieldEnum[] | ComplaintScalarFieldEnum
    having?: complaintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComplaintCountAggregateInputType | true
    _avg?: ComplaintAvgAggregateInputType
    _sum?: ComplaintSumAggregateInputType
    _min?: ComplaintMinAggregateInputType
    _max?: ComplaintMaxAggregateInputType
  }

  export type ComplaintGroupByOutputType = {
    id: number
    id_no: string
    subject: string
    complaint_text: string
    submission_date: Date
    _count: ComplaintCountAggregateOutputType | null
    _avg: ComplaintAvgAggregateOutputType | null
    _sum: ComplaintSumAggregateOutputType | null
    _min: ComplaintMinAggregateOutputType | null
    _max: ComplaintMaxAggregateOutputType | null
  }

  type GetComplaintGroupByPayload<T extends complaintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComplaintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComplaintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComplaintGroupByOutputType[P]>
            : GetScalarType<T[P], ComplaintGroupByOutputType[P]>
        }
      >
    >


  export type complaintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_no?: boolean
    subject?: boolean
    complaint_text?: boolean
    submission_date?: boolean
  }, ExtArgs["result"]["complaint"]>

  export type complaintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_no?: boolean
    subject?: boolean
    complaint_text?: boolean
    submission_date?: boolean
  }, ExtArgs["result"]["complaint"]>

  export type complaintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_no?: boolean
    subject?: boolean
    complaint_text?: boolean
    submission_date?: boolean
  }, ExtArgs["result"]["complaint"]>

  export type complaintSelectScalar = {
    id?: boolean
    id_no?: boolean
    subject?: boolean
    complaint_text?: boolean
    submission_date?: boolean
  }

  export type complaintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_no" | "subject" | "complaint_text" | "submission_date", ExtArgs["result"]["complaint"]>

  export type $complaintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "complaint"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_no: string
      subject: string
      complaint_text: string
      submission_date: Date
    }, ExtArgs["result"]["complaint"]>
    composites: {}
  }

  type complaintGetPayload<S extends boolean | null | undefined | complaintDefaultArgs> = $Result.GetResult<Prisma.$complaintPayload, S>

  type complaintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<complaintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComplaintCountAggregateInputType | true
    }

  export interface complaintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['complaint'], meta: { name: 'complaint' } }
    /**
     * Find zero or one Complaint that matches the filter.
     * @param {complaintFindUniqueArgs} args - Arguments to find a Complaint
     * @example
     * // Get one Complaint
     * const complaint = await prisma.complaint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends complaintFindUniqueArgs>(args: SelectSubset<T, complaintFindUniqueArgs<ExtArgs>>): Prisma__complaintClient<$Result.GetResult<Prisma.$complaintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Complaint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {complaintFindUniqueOrThrowArgs} args - Arguments to find a Complaint
     * @example
     * // Get one Complaint
     * const complaint = await prisma.complaint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends complaintFindUniqueOrThrowArgs>(args: SelectSubset<T, complaintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__complaintClient<$Result.GetResult<Prisma.$complaintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Complaint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {complaintFindFirstArgs} args - Arguments to find a Complaint
     * @example
     * // Get one Complaint
     * const complaint = await prisma.complaint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends complaintFindFirstArgs>(args?: SelectSubset<T, complaintFindFirstArgs<ExtArgs>>): Prisma__complaintClient<$Result.GetResult<Prisma.$complaintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Complaint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {complaintFindFirstOrThrowArgs} args - Arguments to find a Complaint
     * @example
     * // Get one Complaint
     * const complaint = await prisma.complaint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends complaintFindFirstOrThrowArgs>(args?: SelectSubset<T, complaintFindFirstOrThrowArgs<ExtArgs>>): Prisma__complaintClient<$Result.GetResult<Prisma.$complaintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Complaints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {complaintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Complaints
     * const complaints = await prisma.complaint.findMany()
     * 
     * // Get first 10 Complaints
     * const complaints = await prisma.complaint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const complaintWithIdOnly = await prisma.complaint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends complaintFindManyArgs>(args?: SelectSubset<T, complaintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$complaintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Complaint.
     * @param {complaintCreateArgs} args - Arguments to create a Complaint.
     * @example
     * // Create one Complaint
     * const Complaint = await prisma.complaint.create({
     *   data: {
     *     // ... data to create a Complaint
     *   }
     * })
     * 
     */
    create<T extends complaintCreateArgs>(args: SelectSubset<T, complaintCreateArgs<ExtArgs>>): Prisma__complaintClient<$Result.GetResult<Prisma.$complaintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Complaints.
     * @param {complaintCreateManyArgs} args - Arguments to create many Complaints.
     * @example
     * // Create many Complaints
     * const complaint = await prisma.complaint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends complaintCreateManyArgs>(args?: SelectSubset<T, complaintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Complaints and returns the data saved in the database.
     * @param {complaintCreateManyAndReturnArgs} args - Arguments to create many Complaints.
     * @example
     * // Create many Complaints
     * const complaint = await prisma.complaint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Complaints and only return the `id`
     * const complaintWithIdOnly = await prisma.complaint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends complaintCreateManyAndReturnArgs>(args?: SelectSubset<T, complaintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$complaintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Complaint.
     * @param {complaintDeleteArgs} args - Arguments to delete one Complaint.
     * @example
     * // Delete one Complaint
     * const Complaint = await prisma.complaint.delete({
     *   where: {
     *     // ... filter to delete one Complaint
     *   }
     * })
     * 
     */
    delete<T extends complaintDeleteArgs>(args: SelectSubset<T, complaintDeleteArgs<ExtArgs>>): Prisma__complaintClient<$Result.GetResult<Prisma.$complaintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Complaint.
     * @param {complaintUpdateArgs} args - Arguments to update one Complaint.
     * @example
     * // Update one Complaint
     * const complaint = await prisma.complaint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends complaintUpdateArgs>(args: SelectSubset<T, complaintUpdateArgs<ExtArgs>>): Prisma__complaintClient<$Result.GetResult<Prisma.$complaintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Complaints.
     * @param {complaintDeleteManyArgs} args - Arguments to filter Complaints to delete.
     * @example
     * // Delete a few Complaints
     * const { count } = await prisma.complaint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends complaintDeleteManyArgs>(args?: SelectSubset<T, complaintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {complaintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Complaints
     * const complaint = await prisma.complaint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends complaintUpdateManyArgs>(args: SelectSubset<T, complaintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complaints and returns the data updated in the database.
     * @param {complaintUpdateManyAndReturnArgs} args - Arguments to update many Complaints.
     * @example
     * // Update many Complaints
     * const complaint = await prisma.complaint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Complaints and only return the `id`
     * const complaintWithIdOnly = await prisma.complaint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends complaintUpdateManyAndReturnArgs>(args: SelectSubset<T, complaintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$complaintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Complaint.
     * @param {complaintUpsertArgs} args - Arguments to update or create a Complaint.
     * @example
     * // Update or create a Complaint
     * const complaint = await prisma.complaint.upsert({
     *   create: {
     *     // ... data to create a Complaint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Complaint we want to update
     *   }
     * })
     */
    upsert<T extends complaintUpsertArgs>(args: SelectSubset<T, complaintUpsertArgs<ExtArgs>>): Prisma__complaintClient<$Result.GetResult<Prisma.$complaintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Complaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {complaintCountArgs} args - Arguments to filter Complaints to count.
     * @example
     * // Count the number of Complaints
     * const count = await prisma.complaint.count({
     *   where: {
     *     // ... the filter for the Complaints we want to count
     *   }
     * })
    **/
    count<T extends complaintCountArgs>(
      args?: Subset<T, complaintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComplaintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Complaint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComplaintAggregateArgs>(args: Subset<T, ComplaintAggregateArgs>): Prisma.PrismaPromise<GetComplaintAggregateType<T>>

    /**
     * Group by Complaint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {complaintGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends complaintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: complaintGroupByArgs['orderBy'] }
        : { orderBy?: complaintGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, complaintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplaintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the complaint model
   */
  readonly fields: complaintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for complaint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__complaintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the complaint model
   */
  interface complaintFieldRefs {
    readonly id: FieldRef<"complaint", 'Int'>
    readonly id_no: FieldRef<"complaint", 'String'>
    readonly subject: FieldRef<"complaint", 'String'>
    readonly complaint_text: FieldRef<"complaint", 'String'>
    readonly submission_date: FieldRef<"complaint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * complaint findUnique
   */
  export type complaintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint
     */
    select?: complaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint
     */
    omit?: complaintOmit<ExtArgs> | null
    /**
     * Filter, which complaint to fetch.
     */
    where: complaintWhereUniqueInput
  }

  /**
   * complaint findUniqueOrThrow
   */
  export type complaintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint
     */
    select?: complaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint
     */
    omit?: complaintOmit<ExtArgs> | null
    /**
     * Filter, which complaint to fetch.
     */
    where: complaintWhereUniqueInput
  }

  /**
   * complaint findFirst
   */
  export type complaintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint
     */
    select?: complaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint
     */
    omit?: complaintOmit<ExtArgs> | null
    /**
     * Filter, which complaint to fetch.
     */
    where?: complaintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of complaints to fetch.
     */
    orderBy?: complaintOrderByWithRelationInput | complaintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for complaints.
     */
    cursor?: complaintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` complaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of complaints.
     */
    distinct?: ComplaintScalarFieldEnum | ComplaintScalarFieldEnum[]
  }

  /**
   * complaint findFirstOrThrow
   */
  export type complaintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint
     */
    select?: complaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint
     */
    omit?: complaintOmit<ExtArgs> | null
    /**
     * Filter, which complaint to fetch.
     */
    where?: complaintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of complaints to fetch.
     */
    orderBy?: complaintOrderByWithRelationInput | complaintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for complaints.
     */
    cursor?: complaintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` complaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of complaints.
     */
    distinct?: ComplaintScalarFieldEnum | ComplaintScalarFieldEnum[]
  }

  /**
   * complaint findMany
   */
  export type complaintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint
     */
    select?: complaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint
     */
    omit?: complaintOmit<ExtArgs> | null
    /**
     * Filter, which complaints to fetch.
     */
    where?: complaintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of complaints to fetch.
     */
    orderBy?: complaintOrderByWithRelationInput | complaintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing complaints.
     */
    cursor?: complaintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` complaints.
     */
    skip?: number
    distinct?: ComplaintScalarFieldEnum | ComplaintScalarFieldEnum[]
  }

  /**
   * complaint create
   */
  export type complaintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint
     */
    select?: complaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint
     */
    omit?: complaintOmit<ExtArgs> | null
    /**
     * The data needed to create a complaint.
     */
    data: XOR<complaintCreateInput, complaintUncheckedCreateInput>
  }

  /**
   * complaint createMany
   */
  export type complaintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many complaints.
     */
    data: complaintCreateManyInput | complaintCreateManyInput[]
  }

  /**
   * complaint createManyAndReturn
   */
  export type complaintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint
     */
    select?: complaintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the complaint
     */
    omit?: complaintOmit<ExtArgs> | null
    /**
     * The data used to create many complaints.
     */
    data: complaintCreateManyInput | complaintCreateManyInput[]
  }

  /**
   * complaint update
   */
  export type complaintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint
     */
    select?: complaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint
     */
    omit?: complaintOmit<ExtArgs> | null
    /**
     * The data needed to update a complaint.
     */
    data: XOR<complaintUpdateInput, complaintUncheckedUpdateInput>
    /**
     * Choose, which complaint to update.
     */
    where: complaintWhereUniqueInput
  }

  /**
   * complaint updateMany
   */
  export type complaintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update complaints.
     */
    data: XOR<complaintUpdateManyMutationInput, complaintUncheckedUpdateManyInput>
    /**
     * Filter which complaints to update
     */
    where?: complaintWhereInput
    /**
     * Limit how many complaints to update.
     */
    limit?: number
  }

  /**
   * complaint updateManyAndReturn
   */
  export type complaintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint
     */
    select?: complaintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the complaint
     */
    omit?: complaintOmit<ExtArgs> | null
    /**
     * The data used to update complaints.
     */
    data: XOR<complaintUpdateManyMutationInput, complaintUncheckedUpdateManyInput>
    /**
     * Filter which complaints to update
     */
    where?: complaintWhereInput
    /**
     * Limit how many complaints to update.
     */
    limit?: number
  }

  /**
   * complaint upsert
   */
  export type complaintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint
     */
    select?: complaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint
     */
    omit?: complaintOmit<ExtArgs> | null
    /**
     * The filter to search for the complaint to update in case it exists.
     */
    where: complaintWhereUniqueInput
    /**
     * In case the complaint found by the `where` argument doesn't exist, create a new complaint with this data.
     */
    create: XOR<complaintCreateInput, complaintUncheckedCreateInput>
    /**
     * In case the complaint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<complaintUpdateInput, complaintUncheckedUpdateInput>
  }

  /**
   * complaint delete
   */
  export type complaintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint
     */
    select?: complaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint
     */
    omit?: complaintOmit<ExtArgs> | null
    /**
     * Filter which complaint to delete.
     */
    where: complaintWhereUniqueInput
  }

  /**
   * complaint deleteMany
   */
  export type complaintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which complaints to delete
     */
    where?: complaintWhereInput
    /**
     * Limit how many complaints to delete.
     */
    limit?: number
  }

  /**
   * complaint without action
   */
  export type complaintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the complaint
     */
    select?: complaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the complaint
     */
    omit?: complaintOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DormitoryScalarFieldEnum: {
    id: 'id',
    block_no: 'block_no',
    dorm_no: 'dorm_no',
    problem_type: 'problem_type',
    problem_description: 'problem_description',
    submission_date: 'submission_date'
  };

  export type DormitoryScalarFieldEnum = (typeof DormitoryScalarFieldEnum)[keyof typeof DormitoryScalarFieldEnum]


  export const AcademicScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    id_no: 'id_no',
    department: 'department',
    problem_description: 'problem_description',
    submission_date: 'submission_date'
  };

  export type AcademicScalarFieldEnum = (typeof AcademicScalarFieldEnum)[keyof typeof AcademicScalarFieldEnum]


  export const ComplaintScalarFieldEnum: {
    id: 'id',
    id_no: 'id_no',
    subject: 'subject',
    complaint_text: 'complaint_text',
    submission_date: 'submission_date'
  };

  export type ComplaintScalarFieldEnum = (typeof ComplaintScalarFieldEnum)[keyof typeof ComplaintScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DormitoryWhereInput = {
    AND?: DormitoryWhereInput | DormitoryWhereInput[]
    OR?: DormitoryWhereInput[]
    NOT?: DormitoryWhereInput | DormitoryWhereInput[]
    id?: IntFilter<"Dormitory"> | number
    block_no?: StringFilter<"Dormitory"> | string
    dorm_no?: StringFilter<"Dormitory"> | string
    problem_type?: StringFilter<"Dormitory"> | string
    problem_description?: StringFilter<"Dormitory"> | string
    submission_date?: DateTimeFilter<"Dormitory"> | Date | string
  }

  export type DormitoryOrderByWithRelationInput = {
    id?: SortOrder
    block_no?: SortOrder
    dorm_no?: SortOrder
    problem_type?: SortOrder
    problem_description?: SortOrder
    submission_date?: SortOrder
  }

  export type DormitoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DormitoryWhereInput | DormitoryWhereInput[]
    OR?: DormitoryWhereInput[]
    NOT?: DormitoryWhereInput | DormitoryWhereInput[]
    block_no?: StringFilter<"Dormitory"> | string
    dorm_no?: StringFilter<"Dormitory"> | string
    problem_type?: StringFilter<"Dormitory"> | string
    problem_description?: StringFilter<"Dormitory"> | string
    submission_date?: DateTimeFilter<"Dormitory"> | Date | string
  }, "id">

  export type DormitoryOrderByWithAggregationInput = {
    id?: SortOrder
    block_no?: SortOrder
    dorm_no?: SortOrder
    problem_type?: SortOrder
    problem_description?: SortOrder
    submission_date?: SortOrder
    _count?: DormitoryCountOrderByAggregateInput
    _avg?: DormitoryAvgOrderByAggregateInput
    _max?: DormitoryMaxOrderByAggregateInput
    _min?: DormitoryMinOrderByAggregateInput
    _sum?: DormitorySumOrderByAggregateInput
  }

  export type DormitoryScalarWhereWithAggregatesInput = {
    AND?: DormitoryScalarWhereWithAggregatesInput | DormitoryScalarWhereWithAggregatesInput[]
    OR?: DormitoryScalarWhereWithAggregatesInput[]
    NOT?: DormitoryScalarWhereWithAggregatesInput | DormitoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dormitory"> | number
    block_no?: StringWithAggregatesFilter<"Dormitory"> | string
    dorm_no?: StringWithAggregatesFilter<"Dormitory"> | string
    problem_type?: StringWithAggregatesFilter<"Dormitory"> | string
    problem_description?: StringWithAggregatesFilter<"Dormitory"> | string
    submission_date?: DateTimeWithAggregatesFilter<"Dormitory"> | Date | string
  }

  export type academicWhereInput = {
    AND?: academicWhereInput | academicWhereInput[]
    OR?: academicWhereInput[]
    NOT?: academicWhereInput | academicWhereInput[]
    id?: IntFilter<"academic"> | number
    full_name?: StringFilter<"academic"> | string
    id_no?: StringFilter<"academic"> | string
    department?: StringFilter<"academic"> | string
    problem_description?: StringFilter<"academic"> | string
    submission_date?: DateTimeFilter<"academic"> | Date | string
  }

  export type academicOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    id_no?: SortOrder
    department?: SortOrder
    problem_description?: SortOrder
    submission_date?: SortOrder
  }

  export type academicWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: academicWhereInput | academicWhereInput[]
    OR?: academicWhereInput[]
    NOT?: academicWhereInput | academicWhereInput[]
    full_name?: StringFilter<"academic"> | string
    id_no?: StringFilter<"academic"> | string
    department?: StringFilter<"academic"> | string
    problem_description?: StringFilter<"academic"> | string
    submission_date?: DateTimeFilter<"academic"> | Date | string
  }, "id">

  export type academicOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    id_no?: SortOrder
    department?: SortOrder
    problem_description?: SortOrder
    submission_date?: SortOrder
    _count?: academicCountOrderByAggregateInput
    _avg?: academicAvgOrderByAggregateInput
    _max?: academicMaxOrderByAggregateInput
    _min?: academicMinOrderByAggregateInput
    _sum?: academicSumOrderByAggregateInput
  }

  export type academicScalarWhereWithAggregatesInput = {
    AND?: academicScalarWhereWithAggregatesInput | academicScalarWhereWithAggregatesInput[]
    OR?: academicScalarWhereWithAggregatesInput[]
    NOT?: academicScalarWhereWithAggregatesInput | academicScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"academic"> | number
    full_name?: StringWithAggregatesFilter<"academic"> | string
    id_no?: StringWithAggregatesFilter<"academic"> | string
    department?: StringWithAggregatesFilter<"academic"> | string
    problem_description?: StringWithAggregatesFilter<"academic"> | string
    submission_date?: DateTimeWithAggregatesFilter<"academic"> | Date | string
  }

  export type complaintWhereInput = {
    AND?: complaintWhereInput | complaintWhereInput[]
    OR?: complaintWhereInput[]
    NOT?: complaintWhereInput | complaintWhereInput[]
    id?: IntFilter<"complaint"> | number
    id_no?: StringFilter<"complaint"> | string
    subject?: StringFilter<"complaint"> | string
    complaint_text?: StringFilter<"complaint"> | string
    submission_date?: DateTimeFilter<"complaint"> | Date | string
  }

  export type complaintOrderByWithRelationInput = {
    id?: SortOrder
    id_no?: SortOrder
    subject?: SortOrder
    complaint_text?: SortOrder
    submission_date?: SortOrder
  }

  export type complaintWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: complaintWhereInput | complaintWhereInput[]
    OR?: complaintWhereInput[]
    NOT?: complaintWhereInput | complaintWhereInput[]
    id_no?: StringFilter<"complaint"> | string
    subject?: StringFilter<"complaint"> | string
    complaint_text?: StringFilter<"complaint"> | string
    submission_date?: DateTimeFilter<"complaint"> | Date | string
  }, "id">

  export type complaintOrderByWithAggregationInput = {
    id?: SortOrder
    id_no?: SortOrder
    subject?: SortOrder
    complaint_text?: SortOrder
    submission_date?: SortOrder
    _count?: complaintCountOrderByAggregateInput
    _avg?: complaintAvgOrderByAggregateInput
    _max?: complaintMaxOrderByAggregateInput
    _min?: complaintMinOrderByAggregateInput
    _sum?: complaintSumOrderByAggregateInput
  }

  export type complaintScalarWhereWithAggregatesInput = {
    AND?: complaintScalarWhereWithAggregatesInput | complaintScalarWhereWithAggregatesInput[]
    OR?: complaintScalarWhereWithAggregatesInput[]
    NOT?: complaintScalarWhereWithAggregatesInput | complaintScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"complaint"> | number
    id_no?: StringWithAggregatesFilter<"complaint"> | string
    subject?: StringWithAggregatesFilter<"complaint"> | string
    complaint_text?: StringWithAggregatesFilter<"complaint"> | string
    submission_date?: DateTimeWithAggregatesFilter<"complaint"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DormitoryCreateInput = {
    block_no: string
    dorm_no: string
    problem_type: string
    problem_description: string
    submission_date?: Date | string
  }

  export type DormitoryUncheckedCreateInput = {
    id?: number
    block_no: string
    dorm_no: string
    problem_type: string
    problem_description: string
    submission_date?: Date | string
  }

  export type DormitoryUpdateInput = {
    block_no?: StringFieldUpdateOperationsInput | string
    dorm_no?: StringFieldUpdateOperationsInput | string
    problem_type?: StringFieldUpdateOperationsInput | string
    problem_description?: StringFieldUpdateOperationsInput | string
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DormitoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    block_no?: StringFieldUpdateOperationsInput | string
    dorm_no?: StringFieldUpdateOperationsInput | string
    problem_type?: StringFieldUpdateOperationsInput | string
    problem_description?: StringFieldUpdateOperationsInput | string
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DormitoryCreateManyInput = {
    id?: number
    block_no: string
    dorm_no: string
    problem_type: string
    problem_description: string
    submission_date?: Date | string
  }

  export type DormitoryUpdateManyMutationInput = {
    block_no?: StringFieldUpdateOperationsInput | string
    dorm_no?: StringFieldUpdateOperationsInput | string
    problem_type?: StringFieldUpdateOperationsInput | string
    problem_description?: StringFieldUpdateOperationsInput | string
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DormitoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    block_no?: StringFieldUpdateOperationsInput | string
    dorm_no?: StringFieldUpdateOperationsInput | string
    problem_type?: StringFieldUpdateOperationsInput | string
    problem_description?: StringFieldUpdateOperationsInput | string
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type academicCreateInput = {
    full_name: string
    id_no: string
    department: string
    problem_description: string
    submission_date?: Date | string
  }

  export type academicUncheckedCreateInput = {
    id?: number
    full_name: string
    id_no: string
    department: string
    problem_description: string
    submission_date?: Date | string
  }

  export type academicUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    id_no?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    problem_description?: StringFieldUpdateOperationsInput | string
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type academicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    id_no?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    problem_description?: StringFieldUpdateOperationsInput | string
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type academicCreateManyInput = {
    id?: number
    full_name: string
    id_no: string
    department: string
    problem_description: string
    submission_date?: Date | string
  }

  export type academicUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    id_no?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    problem_description?: StringFieldUpdateOperationsInput | string
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type academicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    id_no?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    problem_description?: StringFieldUpdateOperationsInput | string
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type complaintCreateInput = {
    id_no: string
    subject: string
    complaint_text: string
    submission_date?: Date | string
  }

  export type complaintUncheckedCreateInput = {
    id?: number
    id_no: string
    subject: string
    complaint_text: string
    submission_date?: Date | string
  }

  export type complaintUpdateInput = {
    id_no?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    complaint_text?: StringFieldUpdateOperationsInput | string
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type complaintUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_no?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    complaint_text?: StringFieldUpdateOperationsInput | string
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type complaintCreateManyInput = {
    id?: number
    id_no: string
    subject: string
    complaint_text: string
    submission_date?: Date | string
  }

  export type complaintUpdateManyMutationInput = {
    id_no?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    complaint_text?: StringFieldUpdateOperationsInput | string
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type complaintUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_no?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    complaint_text?: StringFieldUpdateOperationsInput | string
    submission_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DormitoryCountOrderByAggregateInput = {
    id?: SortOrder
    block_no?: SortOrder
    dorm_no?: SortOrder
    problem_type?: SortOrder
    problem_description?: SortOrder
    submission_date?: SortOrder
  }

  export type DormitoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DormitoryMaxOrderByAggregateInput = {
    id?: SortOrder
    block_no?: SortOrder
    dorm_no?: SortOrder
    problem_type?: SortOrder
    problem_description?: SortOrder
    submission_date?: SortOrder
  }

  export type DormitoryMinOrderByAggregateInput = {
    id?: SortOrder
    block_no?: SortOrder
    dorm_no?: SortOrder
    problem_type?: SortOrder
    problem_description?: SortOrder
    submission_date?: SortOrder
  }

  export type DormitorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type academicCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    id_no?: SortOrder
    department?: SortOrder
    problem_description?: SortOrder
    submission_date?: SortOrder
  }

  export type academicAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type academicMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    id_no?: SortOrder
    department?: SortOrder
    problem_description?: SortOrder
    submission_date?: SortOrder
  }

  export type academicMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    id_no?: SortOrder
    department?: SortOrder
    problem_description?: SortOrder
    submission_date?: SortOrder
  }

  export type academicSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type complaintCountOrderByAggregateInput = {
    id?: SortOrder
    id_no?: SortOrder
    subject?: SortOrder
    complaint_text?: SortOrder
    submission_date?: SortOrder
  }

  export type complaintAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type complaintMaxOrderByAggregateInput = {
    id?: SortOrder
    id_no?: SortOrder
    subject?: SortOrder
    complaint_text?: SortOrder
    submission_date?: SortOrder
  }

  export type complaintMinOrderByAggregateInput = {
    id?: SortOrder
    id_no?: SortOrder
    subject?: SortOrder
    complaint_text?: SortOrder
    submission_date?: SortOrder
  }

  export type complaintSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}