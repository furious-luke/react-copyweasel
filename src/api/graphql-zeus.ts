/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    ["APIToken"]: AliasType<{
	id?:true,
	purpose?:true
		__typename?: true
}>;
	["APITokenCreateInput"]: {
	id?:number,
	purpose?:string
};
	["APITokenDeleteInput"]: {
	id?:number
};
	["APITokenUpdateInput"]: {
	purpose?:string
};
	["Attribute"]: AliasType<{
	id?:true,
	key?:true,
	description?:true,
	owner?:ValueTypes["Entity"],
	attributeValuesByKey?:ValueTypes["AttributeValue"]
		__typename?: true
}>;
	["AttributeAttributeValuesByKeyInput"]: {
	create?:(ValueTypes["AttributeValueKeyReverseInput"] | undefined)[],
	delete?:(ValueTypes["DeleteByIDInput"] | undefined)[]
};
	["AttributeCreateInput"]: {
	id?:number,
	key?:string,
	description?:string,
	owner?:number,
	attributeValuesByKey?:ValueTypes["AttributeAttributeValuesByKeyInput"]
};
	["AttributeDeleteInput"]: {
	id?:number
};
	["AttributeOwnerReverseInput"]: {
	id?:number,
	key?:string,
	description?:string,
	attributeValuesByKey?:ValueTypes["AttributeAttributeValuesByKeyInput"]
};
	["AttributeUpdateInput"]: {
	key?:string,
	description?:string,
	owner?:number,
	attributeValuesByKey?:ValueTypes["AttributeAttributeValuesByKeyInput"]
};
	["AttributeValue"]: AliasType<{
	id?:true,
	key?:ValueTypes["Attribute"],
	value?:true,
	description?:true,
	copyAttributesByValue?:ValueTypes["CopyAttribute"]
		__typename?: true
}>;
	["AttributeValueCopyAttributesByValueInput"]: {
	create?:(ValueTypes["CopyAttributeValueReverseInput"] | undefined)[],
	delete?:(ValueTypes["DeleteByIDInput"] | undefined)[]
};
	["AttributeValueCreateInput"]: {
	id?:number,
	key?:number,
	value?:string,
	description?:string,
	copyAttributesByValue?:ValueTypes["AttributeValueCopyAttributesByValueInput"]
};
	["AttributeValueDeleteInput"]: {
	id?:number
};
	["AttributeValueKeyReverseInput"]: {
	id?:number,
	value?:string,
	description?:string,
	copyAttributesByValue?:ValueTypes["AttributeValueCopyAttributesByValueInput"]
};
	["AttributeValueUpdateInput"]: {
	key?:number,
	value?:string,
	description?:string,
	copyAttributesByValue?:ValueTypes["AttributeValueCopyAttributesByValueInput"]
};
	["AuthenticateInput"]: {
	email?:string,
	password?:string
};
	["Copy"]: AliasType<{
	id?:true,
	key?:true,
	description?:true,
	owner?:ValueTypes["Entity"],
	copyVariantsByCopy?:ValueTypes["CopyVariant"]
		__typename?: true
}>;
	["CopyAttribute"]: AliasType<{
	id?:true,
	variant?:ValueTypes["CopyVariant"],
	value?:ValueTypes["AttributeValue"]
		__typename?: true
}>;
	["CopyAttributeCreateInput"]: {
	id?:number,
	variant?:number,
	value?:number
};
	["CopyAttributeDeleteInput"]: {
	id?:number
};
	["CopyAttributeUpdateInput"]: {
	variant?:number,
	value?:number
};
	["CopyAttributeValueReverseInput"]: {
	id?:number,
	variant?:number
};
	["CopyAttributeVariantReverseInput"]: {
	id?:number,
	value?:number
};
	["CopyCopyVariantsByCopyInput"]: {
	create?:(ValueTypes["CopyVariantCopyReverseInput"] | undefined)[],
	delete?:(ValueTypes["DeleteByIDInput"] | undefined)[]
};
	["CopyCreateInput"]: {
	id?:number,
	key?:string,
	description?:string,
	owner?:number,
	copyVariantsByCopy?:ValueTypes["CopyCopyVariantsByCopyInput"]
};
	["CopyDeleteInput"]: {
	id?:number
};
	["CopyOwnerReverseInput"]: {
	id?:number,
	key?:string,
	description?:string,
	copyVariantsByCopy?:ValueTypes["CopyCopyVariantsByCopyInput"]
};
	["CopyTableType"]: AliasType<{
	table?:true
		__typename?: true
}>;
	["CopyUpdateInput"]: {
	key?:string,
	description?:string,
	owner?:number,
	copyVariantsByCopy?:ValueTypes["CopyCopyVariantsByCopyInput"]
};
	["CopyVariant"]: AliasType<{
	id?:true,
	copy?:ValueTypes["Copy"],
	text?:true,
	copyAttributesByVariant?:ValueTypes["CopyAttribute"]
		__typename?: true
}>;
	["CopyVariantCopyAttributesByVariantInput"]: {
	create?:(ValueTypes["CopyAttributeVariantReverseInput"] | undefined)[],
	delete?:(ValueTypes["DeleteByIDInput"] | undefined)[]
};
	["CopyVariantCopyReverseInput"]: {
	id?:number,
	text?:string,
	copyAttributesByVariant?:ValueTypes["CopyVariantCopyAttributesByVariantInput"]
};
	["CopyVariantCreateInput"]: {
	id?:number,
	copy?:number,
	text?:string,
	copyAttributesByVariant?:ValueTypes["CopyVariantCopyAttributesByVariantInput"]
};
	["CopyVariantDeleteInput"]: {
	id?:number
};
	["CopyVariantUpdateInput"]: {
	copy?:number,
	text?:string,
	copyAttributesByVariant?:ValueTypes["CopyVariantCopyAttributesByVariantInput"]
};
	/** The `Datetime` scalar type represents a date and time containing a timezone. */
["Datetime"]:unknown;
	["DeleteByIDInput"]: {
	id?:number
};
	["Entity"]: AliasType<{
	id?:true,
	users?:ValueTypes["User"],
	organisations?:ValueTypes["Organisation"],
	attributesByOwner?:ValueTypes["Attribute"],
	copiesByOwner?:ValueTypes["Copy"]
		__typename?: true
}>;
	["EntityAttributesByOwnerInput"]: {
	create?:(ValueTypes["AttributeOwnerReverseInput"] | undefined)[],
	delete?:(ValueTypes["DeleteByIDInput"] | undefined)[]
};
	["EntityCopiesByOwnerInput"]: {
	create?:(ValueTypes["CopyOwnerReverseInput"] | undefined)[],
	delete?:(ValueTypes["DeleteByIDInput"] | undefined)[]
};
	["EntityCreateInput"]: {
	id?:number,
	users?:ValueTypes["EntityUsersInput"],
	organisations?:ValueTypes["EntityOrganisationsInput"],
	attributesByOwner?:ValueTypes["EntityAttributesByOwnerInput"],
	copiesByOwner?:ValueTypes["EntityCopiesByOwnerInput"]
};
	["EntityDeleteInput"]: {
	id?:number
};
	["EntityOrganisationsInput"]: {
	create?:(ValueTypes["OrganisationEntityReverseInput"] | undefined)[],
	delete?:(ValueTypes["DeleteByIDInput"] | undefined)[]
};
	["EntityUpdateInput"]: {
	users?:ValueTypes["EntityUsersInput"],
	organisations?:ValueTypes["EntityOrganisationsInput"],
	attributesByOwner?:ValueTypes["EntityAttributesByOwnerInput"],
	copiesByOwner?:ValueTypes["EntityCopiesByOwnerInput"]
};
	["EntityUsersInput"]: {
	create?:(ValueTypes["UserEntityReverseInput"] | undefined)[],
	delete?:(ValueTypes["DeleteByIDInput"] | undefined)[]
};
	/** The `JSON` scalar type represents a JSON. */
["JSON"]:unknown;
	["JWTType"]: AliasType<{
	token?:true,
	user?:ValueTypes["User"],
	organisation?:ValueTypes["Organisation"]
		__typename?: true
}>;
	["JWTTypeOrganisationReverseInput"]: {
	token?:string,
	user?:number
};
	["JWTTypeUserReverseInput"]: {
	token?:string,
	organisation?:number
};
	["Membership"]: AliasType<{
	id?:true,
	user?:ValueTypes["User"],
	organisation?:ValueTypes["Organisation"],
	role?:true,
	active?:true
		__typename?: true
}>;
	["MembershipCreateInput"]: {
	id?:number,
	user?:number,
	organisation?:number,
	role?:string,
	active?:boolean
};
	["MembershipDeleteInput"]: {
	id?:number
};
	["MembershipOrganisationReverseInput"]: {
	id?:number,
	user?:number,
	role?:string,
	active?:boolean
};
	["MembershipUpdateInput"]: {
	user?:number,
	organisation?:number,
	role?:string,
	active?:boolean
};
	["MembershipUserReverseInput"]: {
	id?:number,
	organisation?:number,
	role?:string,
	active?:boolean
};
	["Mutation"]: AliasType<{
createEntity?: [{	input?:ValueTypes["EntityCreateInput"]},ValueTypes["Entity"]],
updateEntity?: [{	id:number,	input?:ValueTypes["EntityUpdateInput"]},ValueTypes["Entity"]],
updateOrCreateEntity?: [{	id?:number,	input?:ValueTypes["EntityUpdateInput"]},ValueTypes["Entity"]],
deleteEntity?: [{	input?:ValueTypes["EntityDeleteInput"]},ValueTypes["Entity"]],
createUser?: [{	input?:ValueTypes["UserCreateInput"]},ValueTypes["User"]],
updateUser?: [{	id:number,	input?:ValueTypes["UserUpdateInput"]},ValueTypes["User"]],
updateOrCreateUser?: [{	id?:number,	input?:ValueTypes["UserUpdateInput"]},ValueTypes["User"]],
deleteUser?: [{	input?:ValueTypes["UserDeleteInput"]},ValueTypes["User"]],
createOrganisation?: [{	input?:ValueTypes["OrganisationCreateInput"]},ValueTypes["Organisation"]],
updateOrganisation?: [{	id:number,	input?:ValueTypes["OrganisationUpdateInput"]},ValueTypes["Organisation"]],
updateOrCreateOrganisation?: [{	id?:number,	input?:ValueTypes["OrganisationUpdateInput"]},ValueTypes["Organisation"]],
deleteOrganisation?: [{	input?:ValueTypes["OrganisationDeleteInput"]},ValueTypes["Organisation"]],
createMembership?: [{	input?:ValueTypes["MembershipCreateInput"]},ValueTypes["Membership"]],
updateMembership?: [{	id:number,	input?:ValueTypes["MembershipUpdateInput"]},ValueTypes["Membership"]],
updateOrCreateMembership?: [{	id?:number,	input?:ValueTypes["MembershipUpdateInput"]},ValueTypes["Membership"]],
deleteMembership?: [{	input?:ValueTypes["MembershipDeleteInput"]},ValueTypes["Membership"]],
createAPIToken?: [{	input?:ValueTypes["APITokenCreateInput"]},ValueTypes["APIToken"]],
updateAPIToken?: [{	id:number,	input?:ValueTypes["APITokenUpdateInput"]},ValueTypes["APIToken"]],
updateOrCreateAPIToken?: [{	id?:number,	input?:ValueTypes["APITokenUpdateInput"]},ValueTypes["APIToken"]],
deleteAPIToken?: [{	input?:ValueTypes["APITokenDeleteInput"]},ValueTypes["APIToken"]],
createAttribute?: [{	input?:ValueTypes["AttributeCreateInput"]},ValueTypes["Attribute"]],
updateAttribute?: [{	id:number,	input?:ValueTypes["AttributeUpdateInput"]},ValueTypes["Attribute"]],
updateOrCreateAttribute?: [{	id?:number,	input?:ValueTypes["AttributeUpdateInput"]},ValueTypes["Attribute"]],
deleteAttribute?: [{	input?:ValueTypes["AttributeDeleteInput"]},ValueTypes["Attribute"]],
createAttributeValue?: [{	input?:ValueTypes["AttributeValueCreateInput"]},ValueTypes["AttributeValue"]],
updateAttributeValue?: [{	id:number,	input?:ValueTypes["AttributeValueUpdateInput"]},ValueTypes["AttributeValue"]],
updateOrCreateAttributeValue?: [{	id?:number,	input?:ValueTypes["AttributeValueUpdateInput"]},ValueTypes["AttributeValue"]],
deleteAttributeValue?: [{	input?:ValueTypes["AttributeValueDeleteInput"]},ValueTypes["AttributeValue"]],
createCopy?: [{	input?:ValueTypes["CopyCreateInput"]},ValueTypes["Copy"]],
updateCopy?: [{	id:number,	input?:ValueTypes["CopyUpdateInput"]},ValueTypes["Copy"]],
updateOrCreateCopy?: [{	id?:number,	input?:ValueTypes["CopyUpdateInput"]},ValueTypes["Copy"]],
deleteCopy?: [{	input?:ValueTypes["CopyDeleteInput"]},ValueTypes["Copy"]],
createCopyVariant?: [{	input?:ValueTypes["CopyVariantCreateInput"]},ValueTypes["CopyVariant"]],
updateCopyVariant?: [{	id:number,	input?:ValueTypes["CopyVariantUpdateInput"]},ValueTypes["CopyVariant"]],
updateOrCreateCopyVariant?: [{	id?:number,	input?:ValueTypes["CopyVariantUpdateInput"]},ValueTypes["CopyVariant"]],
deleteCopyVariant?: [{	input?:ValueTypes["CopyVariantDeleteInput"]},ValueTypes["CopyVariant"]],
createCopyAttribute?: [{	input?:ValueTypes["CopyAttributeCreateInput"]},ValueTypes["CopyAttribute"]],
updateCopyAttribute?: [{	id:number,	input?:ValueTypes["CopyAttributeUpdateInput"]},ValueTypes["CopyAttribute"]],
updateOrCreateCopyAttribute?: [{	id?:number,	input?:ValueTypes["CopyAttributeUpdateInput"]},ValueTypes["CopyAttribute"]],
deleteCopyAttribute?: [{	input?:ValueTypes["CopyAttributeDeleteInput"]},ValueTypes["CopyAttribute"]],
authenticate?: [{	input?:ValueTypes["AuthenticateInput"]},ValueTypes["JWTType"]],
refreshAnonymousUser?: [{	input?:ValueTypes["RefreshAnonymousUserInput"]},ValueTypes["JWTType"]]
		__typename?: true
}>;
	["Organisation"]: AliasType<{
	id?:true,
	name?:true,
	entity?:ValueTypes["Entity"],
	memberships?:ValueTypes["Membership"],
	jwtTypesByOrganisation?:ValueTypes["JWTType"]
		__typename?: true
}>;
	["OrganisationCreateInput"]: {
	id?:number,
	name?:string,
	entity?:number,
	memberships?:ValueTypes["OrganisationMembershipsInput"],
	jwtTypesByOrganisation?:ValueTypes["OrganisationJwtTypesByOrganisationInput"]
};
	["OrganisationDeleteInput"]: {
	id?:number
};
	["OrganisationEntityReverseInput"]: {
	id?:number,
	name?:string,
	memberships?:ValueTypes["OrganisationMembershipsInput"],
	jwtTypesByOrganisation?:ValueTypes["OrganisationJwtTypesByOrganisationInput"]
};
	["OrganisationJwtTypesByOrganisationInput"]: {
	create?:(ValueTypes["JWTTypeOrganisationReverseInput"] | undefined)[],
	delete?:(ValueTypes["DeleteByIDInput"] | undefined)[]
};
	["OrganisationMembershipsInput"]: {
	create?:(ValueTypes["MembershipOrganisationReverseInput"] | undefined)[],
	delete?:(ValueTypes["DeleteByIDInput"] | undefined)[]
};
	["OrganisationUpdateInput"]: {
	name?:string,
	entity?:number,
	memberships?:ValueTypes["OrganisationMembershipsInput"],
	jwtTypesByOrganisation?:ValueTypes["OrganisationJwtTypesByOrganisationInput"]
};
	["Query"]: AliasType<{
	allEntitys?:ValueTypes["Entity"],
getEntity?: [{	id?:number},ValueTypes["Entity"]],
	allUsers?:ValueTypes["User"],
getUser?: [{	id?:number},ValueTypes["User"]],
getUserByEmail?: [{	email?:string},ValueTypes["User"]],
	allOrganisations?:ValueTypes["Organisation"],
getOrganisation?: [{	id?:number},ValueTypes["Organisation"]],
	allMemberships?:ValueTypes["Membership"],
getMembership?: [{	id?:number},ValueTypes["Membership"]],
	allAPITokens?:ValueTypes["APIToken"],
getAPIToken?: [{	id?:number},ValueTypes["APIToken"]],
	allAttributes?:ValueTypes["Attribute"],
getAttribute?: [{	id?:number},ValueTypes["Attribute"]],
	allAttributeValues?:ValueTypes["AttributeValue"],
getAttributeValue?: [{	id?:number},ValueTypes["AttributeValue"]],
	allCopies?:ValueTypes["Copy"],
getCopy?: [{	id?:number},ValueTypes["Copy"]],
	allCopyVariants?:ValueTypes["CopyVariant"],
getCopyVariant?: [{	id?:number},ValueTypes["CopyVariant"]],
	allCopyAttributes?:ValueTypes["CopyAttribute"],
getCopyAttribute?: [{	id?:number},ValueTypes["CopyAttribute"]],
matchCopy?: [{	attributes?:ValueTypes["JSON"]},ValueTypes["Copy"]],
	copyTable?:ValueTypes["CopyTableType"]
		__typename?: true
}>;
	["RefreshAnonymousUserInput"]: {
	token?:string
};
	["User"]: AliasType<{
	id?:true,
	name?:true,
	email?:true,
	created?:true,
	anonymous?:true,
	entity?:ValueTypes["Entity"],
	memberships?:ValueTypes["Membership"],
	jwtTypesByUser?:ValueTypes["JWTType"]
		__typename?: true
}>;
	["UserCreateInput"]: {
	id?:number,
	name?:string,
	email?:string,
	created?:ValueTypes["Datetime"],
	anonymous?:boolean,
	entity?:number,
	memberships?:ValueTypes["UserMembershipsInput"],
	jwtTypesByUser?:ValueTypes["UserJwtTypesByUserInput"]
};
	["UserDeleteInput"]: {
	id?:number
};
	["UserEntityReverseInput"]: {
	id?:number,
	name?:string,
	email?:string,
	password?:string,
	loggedOut?:ValueTypes["Datetime"],
	created?:ValueTypes["Datetime"],
	anonymous?:boolean,
	memberships?:ValueTypes["UserMembershipsInput"],
	jwtTypesByUser?:ValueTypes["UserJwtTypesByUserInput"]
};
	["UserJwtTypesByUserInput"]: {
	create?:(ValueTypes["JWTTypeUserReverseInput"] | undefined)[],
	delete?:(ValueTypes["DeleteByIDInput"] | undefined)[]
};
	["UserMembershipsInput"]: {
	create?:(ValueTypes["MembershipUserReverseInput"] | undefined)[],
	delete?:(ValueTypes["DeleteByIDInput"] | undefined)[]
};
	["UserUpdateInput"]: {
	name?:string,
	email?:string,
	created?:ValueTypes["Datetime"],
	anonymous?:boolean,
	entity?:number,
	memberships?:ValueTypes["UserMembershipsInput"],
	jwtTypesByUser?:ValueTypes["UserJwtTypesByUserInput"]
};
	/** The `UUID` scalar type represents a UUID. */
["UUID"]:unknown
  }

export type PartialObjects = {
    ["APIToken"]: {
		__typename?: "APIToken";
			id?:number,
			purpose?:string
	},
	["APITokenCreateInput"]: {
	id?:number,
	purpose?:string
},
	["APITokenDeleteInput"]: {
	id?:number
},
	["APITokenUpdateInput"]: {
	purpose?:string
},
	["Attribute"]: {
		__typename?: "Attribute";
			id?:number,
			key?:string,
			description?:string,
			owner?:PartialObjects["Entity"],
			attributeValuesByKey?:(PartialObjects["AttributeValue"] | undefined)[]
	},
	["AttributeAttributeValuesByKeyInput"]: {
	create?:(PartialObjects["AttributeValueKeyReverseInput"] | undefined)[],
	delete?:(PartialObjects["DeleteByIDInput"] | undefined)[]
},
	["AttributeCreateInput"]: {
	id?:number,
	key?:string,
	description?:string,
	owner?:number,
	attributeValuesByKey?:PartialObjects["AttributeAttributeValuesByKeyInput"]
},
	["AttributeDeleteInput"]: {
	id?:number
},
	["AttributeOwnerReverseInput"]: {
	id?:number,
	key?:string,
	description?:string,
	attributeValuesByKey?:PartialObjects["AttributeAttributeValuesByKeyInput"]
},
	["AttributeUpdateInput"]: {
	key?:string,
	description?:string,
	owner?:number,
	attributeValuesByKey?:PartialObjects["AttributeAttributeValuesByKeyInput"]
},
	["AttributeValue"]: {
		__typename?: "AttributeValue";
			id?:number,
			key?:PartialObjects["Attribute"],
			value?:string,
			description?:string,
			copyAttributesByValue?:(PartialObjects["CopyAttribute"] | undefined)[]
	},
	["AttributeValueCopyAttributesByValueInput"]: {
	create?:(PartialObjects["CopyAttributeValueReverseInput"] | undefined)[],
	delete?:(PartialObjects["DeleteByIDInput"] | undefined)[]
},
	["AttributeValueCreateInput"]: {
	id?:number,
	key?:number,
	value?:string,
	description?:string,
	copyAttributesByValue?:PartialObjects["AttributeValueCopyAttributesByValueInput"]
},
	["AttributeValueDeleteInput"]: {
	id?:number
},
	["AttributeValueKeyReverseInput"]: {
	id?:number,
	value?:string,
	description?:string,
	copyAttributesByValue?:PartialObjects["AttributeValueCopyAttributesByValueInput"]
},
	["AttributeValueUpdateInput"]: {
	key?:number,
	value?:string,
	description?:string,
	copyAttributesByValue?:PartialObjects["AttributeValueCopyAttributesByValueInput"]
},
	["AuthenticateInput"]: {
	email?:string,
	password?:string
},
	["Copy"]: {
		__typename?: "Copy";
			id?:number,
			key?:string,
			description?:string,
			owner?:PartialObjects["Entity"],
			copyVariantsByCopy?:(PartialObjects["CopyVariant"] | undefined)[]
	},
	["CopyAttribute"]: {
		__typename?: "CopyAttribute";
			id?:number,
			variant?:PartialObjects["CopyVariant"],
			value?:PartialObjects["AttributeValue"]
	},
	["CopyAttributeCreateInput"]: {
	id?:number,
	variant?:number,
	value?:number
},
	["CopyAttributeDeleteInput"]: {
	id?:number
},
	["CopyAttributeUpdateInput"]: {
	variant?:number,
	value?:number
},
	["CopyAttributeValueReverseInput"]: {
	id?:number,
	variant?:number
},
	["CopyAttributeVariantReverseInput"]: {
	id?:number,
	value?:number
},
	["CopyCopyVariantsByCopyInput"]: {
	create?:(PartialObjects["CopyVariantCopyReverseInput"] | undefined)[],
	delete?:(PartialObjects["DeleteByIDInput"] | undefined)[]
},
	["CopyCreateInput"]: {
	id?:number,
	key?:string,
	description?:string,
	owner?:number,
	copyVariantsByCopy?:PartialObjects["CopyCopyVariantsByCopyInput"]
},
	["CopyDeleteInput"]: {
	id?:number
},
	["CopyOwnerReverseInput"]: {
	id?:number,
	key?:string,
	description?:string,
	copyVariantsByCopy?:PartialObjects["CopyCopyVariantsByCopyInput"]
},
	["CopyTableType"]: {
		__typename?: "CopyTableType";
			table?:string
	},
	["CopyUpdateInput"]: {
	key?:string,
	description?:string,
	owner?:number,
	copyVariantsByCopy?:PartialObjects["CopyCopyVariantsByCopyInput"]
},
	["CopyVariant"]: {
		__typename?: "CopyVariant";
			id?:number,
			copy?:PartialObjects["Copy"],
			text?:string,
			copyAttributesByVariant?:(PartialObjects["CopyAttribute"] | undefined)[]
	},
	["CopyVariantCopyAttributesByVariantInput"]: {
	create?:(PartialObjects["CopyAttributeVariantReverseInput"] | undefined)[],
	delete?:(PartialObjects["DeleteByIDInput"] | undefined)[]
},
	["CopyVariantCopyReverseInput"]: {
	id?:number,
	text?:string,
	copyAttributesByVariant?:PartialObjects["CopyVariantCopyAttributesByVariantInput"]
},
	["CopyVariantCreateInput"]: {
	id?:number,
	copy?:number,
	text?:string,
	copyAttributesByVariant?:PartialObjects["CopyVariantCopyAttributesByVariantInput"]
},
	["CopyVariantDeleteInput"]: {
	id?:number
},
	["CopyVariantUpdateInput"]: {
	copy?:number,
	text?:string,
	copyAttributesByVariant?:PartialObjects["CopyVariantCopyAttributesByVariantInput"]
},
	/** The `Datetime` scalar type represents a date and time containing a timezone. */
["Datetime"]:any,
	["DeleteByIDInput"]: {
	id?:number
},
	["Entity"]: {
		__typename?: "Entity";
			id?:number,
			users?:(PartialObjects["User"] | undefined)[],
			organisations?:(PartialObjects["Organisation"] | undefined)[],
			attributesByOwner?:(PartialObjects["Attribute"] | undefined)[],
			copiesByOwner?:(PartialObjects["Copy"] | undefined)[]
	},
	["EntityAttributesByOwnerInput"]: {
	create?:(PartialObjects["AttributeOwnerReverseInput"] | undefined)[],
	delete?:(PartialObjects["DeleteByIDInput"] | undefined)[]
},
	["EntityCopiesByOwnerInput"]: {
	create?:(PartialObjects["CopyOwnerReverseInput"] | undefined)[],
	delete?:(PartialObjects["DeleteByIDInput"] | undefined)[]
},
	["EntityCreateInput"]: {
	id?:number,
	users?:PartialObjects["EntityUsersInput"],
	organisations?:PartialObjects["EntityOrganisationsInput"],
	attributesByOwner?:PartialObjects["EntityAttributesByOwnerInput"],
	copiesByOwner?:PartialObjects["EntityCopiesByOwnerInput"]
},
	["EntityDeleteInput"]: {
	id?:number
},
	["EntityOrganisationsInput"]: {
	create?:(PartialObjects["OrganisationEntityReverseInput"] | undefined)[],
	delete?:(PartialObjects["DeleteByIDInput"] | undefined)[]
},
	["EntityUpdateInput"]: {
	users?:PartialObjects["EntityUsersInput"],
	organisations?:PartialObjects["EntityOrganisationsInput"],
	attributesByOwner?:PartialObjects["EntityAttributesByOwnerInput"],
	copiesByOwner?:PartialObjects["EntityCopiesByOwnerInput"]
},
	["EntityUsersInput"]: {
	create?:(PartialObjects["UserEntityReverseInput"] | undefined)[],
	delete?:(PartialObjects["DeleteByIDInput"] | undefined)[]
},
	/** The `JSON` scalar type represents a JSON. */
["JSON"]:any,
	["JWTType"]: {
		__typename?: "JWTType";
			token?:string,
			user?:PartialObjects["User"],
			organisation?:PartialObjects["Organisation"]
	},
	["JWTTypeOrganisationReverseInput"]: {
	token?:string,
	user?:number
},
	["JWTTypeUserReverseInput"]: {
	token?:string,
	organisation?:number
},
	["Membership"]: {
		__typename?: "Membership";
			id?:number,
			user?:PartialObjects["User"],
			organisation?:PartialObjects["Organisation"],
			role?:string,
			active?:boolean
	},
	["MembershipCreateInput"]: {
	id?:number,
	user?:number,
	organisation?:number,
	role?:string,
	active?:boolean
},
	["MembershipDeleteInput"]: {
	id?:number
},
	["MembershipOrganisationReverseInput"]: {
	id?:number,
	user?:number,
	role?:string,
	active?:boolean
},
	["MembershipUpdateInput"]: {
	user?:number,
	organisation?:number,
	role?:string,
	active?:boolean
},
	["MembershipUserReverseInput"]: {
	id?:number,
	organisation?:number,
	role?:string,
	active?:boolean
},
	["Mutation"]: {
		__typename?: "Mutation";
			createEntity?:PartialObjects["Entity"],
			updateEntity?:PartialObjects["Entity"],
			updateOrCreateEntity?:PartialObjects["Entity"],
			deleteEntity?:PartialObjects["Entity"],
			createUser?:PartialObjects["User"],
			updateUser?:PartialObjects["User"],
			updateOrCreateUser?:PartialObjects["User"],
			deleteUser?:PartialObjects["User"],
			createOrganisation?:PartialObjects["Organisation"],
			updateOrganisation?:PartialObjects["Organisation"],
			updateOrCreateOrganisation?:PartialObjects["Organisation"],
			deleteOrganisation?:PartialObjects["Organisation"],
			createMembership?:PartialObjects["Membership"],
			updateMembership?:PartialObjects["Membership"],
			updateOrCreateMembership?:PartialObjects["Membership"],
			deleteMembership?:PartialObjects["Membership"],
			createAPIToken?:PartialObjects["APIToken"],
			updateAPIToken?:PartialObjects["APIToken"],
			updateOrCreateAPIToken?:PartialObjects["APIToken"],
			deleteAPIToken?:PartialObjects["APIToken"],
			createAttribute?:PartialObjects["Attribute"],
			updateAttribute?:PartialObjects["Attribute"],
			updateOrCreateAttribute?:PartialObjects["Attribute"],
			deleteAttribute?:PartialObjects["Attribute"],
			createAttributeValue?:PartialObjects["AttributeValue"],
			updateAttributeValue?:PartialObjects["AttributeValue"],
			updateOrCreateAttributeValue?:PartialObjects["AttributeValue"],
			deleteAttributeValue?:PartialObjects["AttributeValue"],
			createCopy?:PartialObjects["Copy"],
			updateCopy?:PartialObjects["Copy"],
			updateOrCreateCopy?:PartialObjects["Copy"],
			deleteCopy?:PartialObjects["Copy"],
			createCopyVariant?:PartialObjects["CopyVariant"],
			updateCopyVariant?:PartialObjects["CopyVariant"],
			updateOrCreateCopyVariant?:PartialObjects["CopyVariant"],
			deleteCopyVariant?:PartialObjects["CopyVariant"],
			createCopyAttribute?:PartialObjects["CopyAttribute"],
			updateCopyAttribute?:PartialObjects["CopyAttribute"],
			updateOrCreateCopyAttribute?:PartialObjects["CopyAttribute"],
			deleteCopyAttribute?:PartialObjects["CopyAttribute"],
			authenticate?:PartialObjects["JWTType"],
			refreshAnonymousUser?:PartialObjects["JWTType"]
	},
	["Organisation"]: {
		__typename?: "Organisation";
			id?:number,
			name?:string,
			entity?:PartialObjects["Entity"],
			memberships?:(PartialObjects["Membership"] | undefined)[],
			jwtTypesByOrganisation?:(PartialObjects["JWTType"] | undefined)[]
	},
	["OrganisationCreateInput"]: {
	id?:number,
	name?:string,
	entity?:number,
	memberships?:PartialObjects["OrganisationMembershipsInput"],
	jwtTypesByOrganisation?:PartialObjects["OrganisationJwtTypesByOrganisationInput"]
},
	["OrganisationDeleteInput"]: {
	id?:number
},
	["OrganisationEntityReverseInput"]: {
	id?:number,
	name?:string,
	memberships?:PartialObjects["OrganisationMembershipsInput"],
	jwtTypesByOrganisation?:PartialObjects["OrganisationJwtTypesByOrganisationInput"]
},
	["OrganisationJwtTypesByOrganisationInput"]: {
	create?:(PartialObjects["JWTTypeOrganisationReverseInput"] | undefined)[],
	delete?:(PartialObjects["DeleteByIDInput"] | undefined)[]
},
	["OrganisationMembershipsInput"]: {
	create?:(PartialObjects["MembershipOrganisationReverseInput"] | undefined)[],
	delete?:(PartialObjects["DeleteByIDInput"] | undefined)[]
},
	["OrganisationUpdateInput"]: {
	name?:string,
	entity?:number,
	memberships?:PartialObjects["OrganisationMembershipsInput"],
	jwtTypesByOrganisation?:PartialObjects["OrganisationJwtTypesByOrganisationInput"]
},
	["Query"]: {
		__typename?: "Query";
			allEntitys?:(PartialObjects["Entity"] | undefined)[],
			getEntity?:PartialObjects["Entity"],
			allUsers?:(PartialObjects["User"] | undefined)[],
			getUser?:PartialObjects["User"],
			getUserByEmail?:PartialObjects["User"],
			allOrganisations?:(PartialObjects["Organisation"] | undefined)[],
			getOrganisation?:PartialObjects["Organisation"],
			allMemberships?:(PartialObjects["Membership"] | undefined)[],
			getMembership?:PartialObjects["Membership"],
			allAPITokens?:(PartialObjects["APIToken"] | undefined)[],
			getAPIToken?:PartialObjects["APIToken"],
			allAttributes?:(PartialObjects["Attribute"] | undefined)[],
			getAttribute?:PartialObjects["Attribute"],
			allAttributeValues?:(PartialObjects["AttributeValue"] | undefined)[],
			getAttributeValue?:PartialObjects["AttributeValue"],
			allCopies?:(PartialObjects["Copy"] | undefined)[],
			getCopy?:PartialObjects["Copy"],
			allCopyVariants?:(PartialObjects["CopyVariant"] | undefined)[],
			getCopyVariant?:PartialObjects["CopyVariant"],
			allCopyAttributes?:(PartialObjects["CopyAttribute"] | undefined)[],
			getCopyAttribute?:PartialObjects["CopyAttribute"],
			matchCopy?:PartialObjects["Copy"],
			copyTable?:PartialObjects["CopyTableType"]
	},
	["RefreshAnonymousUserInput"]: {
	token?:string
},
	["User"]: {
		__typename?: "User";
			id?:number,
			name?:string,
			email?:string,
			created?:PartialObjects["Datetime"],
			anonymous?:boolean,
			entity?:PartialObjects["Entity"],
			memberships?:(PartialObjects["Membership"] | undefined)[],
			jwtTypesByUser?:(PartialObjects["JWTType"] | undefined)[]
	},
	["UserCreateInput"]: {
	id?:number,
	name?:string,
	email?:string,
	created?:PartialObjects["Datetime"],
	anonymous?:boolean,
	entity?:number,
	memberships?:PartialObjects["UserMembershipsInput"],
	jwtTypesByUser?:PartialObjects["UserJwtTypesByUserInput"]
},
	["UserDeleteInput"]: {
	id?:number
},
	["UserEntityReverseInput"]: {
	id?:number,
	name?:string,
	email?:string,
	password?:string,
	loggedOut?:PartialObjects["Datetime"],
	created?:PartialObjects["Datetime"],
	anonymous?:boolean,
	memberships?:PartialObjects["UserMembershipsInput"],
	jwtTypesByUser?:PartialObjects["UserJwtTypesByUserInput"]
},
	["UserJwtTypesByUserInput"]: {
	create?:(PartialObjects["JWTTypeUserReverseInput"] | undefined)[],
	delete?:(PartialObjects["DeleteByIDInput"] | undefined)[]
},
	["UserMembershipsInput"]: {
	create?:(PartialObjects["MembershipUserReverseInput"] | undefined)[],
	delete?:(PartialObjects["DeleteByIDInput"] | undefined)[]
},
	["UserUpdateInput"]: {
	name?:string,
	email?:string,
	created?:PartialObjects["Datetime"],
	anonymous?:boolean,
	entity?:number,
	memberships?:PartialObjects["UserMembershipsInput"],
	jwtTypesByUser?:PartialObjects["UserJwtTypesByUserInput"]
},
	/** The `UUID` scalar type represents a UUID. */
["UUID"]:any
  }

export type APIToken = {
	__typename?: "APIToken",
	id?:number,
	purpose?:string
}

export type APITokenCreateInput = {
		id?:number,
	purpose?:string
}

export type APITokenDeleteInput = {
		id?:number
}

export type APITokenUpdateInput = {
		purpose?:string
}

export type Attribute = {
	__typename?: "Attribute",
	id?:number,
	key?:string,
	description?:string,
	owner?:Entity,
	attributeValuesByKey?:(AttributeValue | undefined)[]
}

export type AttributeAttributeValuesByKeyInput = {
		create?:(AttributeValueKeyReverseInput | undefined)[],
	delete?:(DeleteByIDInput | undefined)[]
}

export type AttributeCreateInput = {
		id?:number,
	key?:string,
	description?:string,
	owner?:number,
	attributeValuesByKey?:AttributeAttributeValuesByKeyInput
}

export type AttributeDeleteInput = {
		id?:number
}

export type AttributeOwnerReverseInput = {
		id?:number,
	key?:string,
	description?:string,
	attributeValuesByKey?:AttributeAttributeValuesByKeyInput
}

export type AttributeUpdateInput = {
		key?:string,
	description?:string,
	owner?:number,
	attributeValuesByKey?:AttributeAttributeValuesByKeyInput
}

export type AttributeValue = {
	__typename?: "AttributeValue",
	id?:number,
	key?:Attribute,
	value?:string,
	description?:string,
	copyAttributesByValue?:(CopyAttribute | undefined)[]
}

export type AttributeValueCopyAttributesByValueInput = {
		create?:(CopyAttributeValueReverseInput | undefined)[],
	delete?:(DeleteByIDInput | undefined)[]
}

export type AttributeValueCreateInput = {
		id?:number,
	key?:number,
	value?:string,
	description?:string,
	copyAttributesByValue?:AttributeValueCopyAttributesByValueInput
}

export type AttributeValueDeleteInput = {
		id?:number
}

export type AttributeValueKeyReverseInput = {
		id?:number,
	value?:string,
	description?:string,
	copyAttributesByValue?:AttributeValueCopyAttributesByValueInput
}

export type AttributeValueUpdateInput = {
		key?:number,
	value?:string,
	description?:string,
	copyAttributesByValue?:AttributeValueCopyAttributesByValueInput
}

export type AuthenticateInput = {
		email?:string,
	password?:string
}

export type Copy = {
	__typename?: "Copy",
	id?:number,
	key?:string,
	description?:string,
	owner?:Entity,
	copyVariantsByCopy?:(CopyVariant | undefined)[]
}

export type CopyAttribute = {
	__typename?: "CopyAttribute",
	id?:number,
	variant?:CopyVariant,
	value?:AttributeValue
}

export type CopyAttributeCreateInput = {
		id?:number,
	variant?:number,
	value?:number
}

export type CopyAttributeDeleteInput = {
		id?:number
}

export type CopyAttributeUpdateInput = {
		variant?:number,
	value?:number
}

export type CopyAttributeValueReverseInput = {
		id?:number,
	variant?:number
}

export type CopyAttributeVariantReverseInput = {
		id?:number,
	value?:number
}

export type CopyCopyVariantsByCopyInput = {
		create?:(CopyVariantCopyReverseInput | undefined)[],
	delete?:(DeleteByIDInput | undefined)[]
}

export type CopyCreateInput = {
		id?:number,
	key?:string,
	description?:string,
	owner?:number,
	copyVariantsByCopy?:CopyCopyVariantsByCopyInput
}

export type CopyDeleteInput = {
		id?:number
}

export type CopyOwnerReverseInput = {
		id?:number,
	key?:string,
	description?:string,
	copyVariantsByCopy?:CopyCopyVariantsByCopyInput
}

export type CopyTableType = {
	__typename?: "CopyTableType",
	table?:string
}

export type CopyUpdateInput = {
		key?:string,
	description?:string,
	owner?:number,
	copyVariantsByCopy?:CopyCopyVariantsByCopyInput
}

export type CopyVariant = {
	__typename?: "CopyVariant",
	id?:number,
	copy?:Copy,
	text?:string,
	copyAttributesByVariant?:(CopyAttribute | undefined)[]
}

export type CopyVariantCopyAttributesByVariantInput = {
		create?:(CopyAttributeVariantReverseInput | undefined)[],
	delete?:(DeleteByIDInput | undefined)[]
}

export type CopyVariantCopyReverseInput = {
		id?:number,
	text?:string,
	copyAttributesByVariant?:CopyVariantCopyAttributesByVariantInput
}

export type CopyVariantCreateInput = {
		id?:number,
	copy?:number,
	text?:string,
	copyAttributesByVariant?:CopyVariantCopyAttributesByVariantInput
}

export type CopyVariantDeleteInput = {
		id?:number
}

export type CopyVariantUpdateInput = {
		copy?:number,
	text?:string,
	copyAttributesByVariant?:CopyVariantCopyAttributesByVariantInput
}

/** The `Datetime` scalar type represents a date and time containing a timezone. */
export type Datetime = any

export type DeleteByIDInput = {
		id?:number
}

export type Entity = {
	__typename?: "Entity",
	id?:number,
	users?:(User | undefined)[],
	organisations?:(Organisation | undefined)[],
	attributesByOwner?:(Attribute | undefined)[],
	copiesByOwner?:(Copy | undefined)[]
}

export type EntityAttributesByOwnerInput = {
		create?:(AttributeOwnerReverseInput | undefined)[],
	delete?:(DeleteByIDInput | undefined)[]
}

export type EntityCopiesByOwnerInput = {
		create?:(CopyOwnerReverseInput | undefined)[],
	delete?:(DeleteByIDInput | undefined)[]
}

export type EntityCreateInput = {
		id?:number,
	users?:EntityUsersInput,
	organisations?:EntityOrganisationsInput,
	attributesByOwner?:EntityAttributesByOwnerInput,
	copiesByOwner?:EntityCopiesByOwnerInput
}

export type EntityDeleteInput = {
		id?:number
}

export type EntityOrganisationsInput = {
		create?:(OrganisationEntityReverseInput | undefined)[],
	delete?:(DeleteByIDInput | undefined)[]
}

export type EntityUpdateInput = {
		users?:EntityUsersInput,
	organisations?:EntityOrganisationsInput,
	attributesByOwner?:EntityAttributesByOwnerInput,
	copiesByOwner?:EntityCopiesByOwnerInput
}

export type EntityUsersInput = {
		create?:(UserEntityReverseInput | undefined)[],
	delete?:(DeleteByIDInput | undefined)[]
}

/** The `JSON` scalar type represents a JSON. */
export type JSON = any

export type JWTType = {
	__typename?: "JWTType",
	token?:string,
	user?:User,
	organisation?:Organisation
}

export type JWTTypeOrganisationReverseInput = {
		token?:string,
	user?:number
}

export type JWTTypeUserReverseInput = {
		token?:string,
	organisation?:number
}

export type Membership = {
	__typename?: "Membership",
	id?:number,
	user?:User,
	organisation?:Organisation,
	role?:string,
	active?:boolean
}

export type MembershipCreateInput = {
		id?:number,
	user?:number,
	organisation?:number,
	role?:string,
	active?:boolean
}

export type MembershipDeleteInput = {
		id?:number
}

export type MembershipOrganisationReverseInput = {
		id?:number,
	user?:number,
	role?:string,
	active?:boolean
}

export type MembershipUpdateInput = {
		user?:number,
	organisation?:number,
	role?:string,
	active?:boolean
}

export type MembershipUserReverseInput = {
		id?:number,
	organisation?:number,
	role?:string,
	active?:boolean
}

export type Mutation = {
	__typename?: "Mutation",
	createEntity?:Entity,
	updateEntity?:Entity,
	updateOrCreateEntity?:Entity,
	deleteEntity?:Entity,
	createUser?:User,
	updateUser?:User,
	updateOrCreateUser?:User,
	deleteUser?:User,
	createOrganisation?:Organisation,
	updateOrganisation?:Organisation,
	updateOrCreateOrganisation?:Organisation,
	deleteOrganisation?:Organisation,
	createMembership?:Membership,
	updateMembership?:Membership,
	updateOrCreateMembership?:Membership,
	deleteMembership?:Membership,
	createAPIToken?:APIToken,
	updateAPIToken?:APIToken,
	updateOrCreateAPIToken?:APIToken,
	deleteAPIToken?:APIToken,
	createAttribute?:Attribute,
	updateAttribute?:Attribute,
	updateOrCreateAttribute?:Attribute,
	deleteAttribute?:Attribute,
	createAttributeValue?:AttributeValue,
	updateAttributeValue?:AttributeValue,
	updateOrCreateAttributeValue?:AttributeValue,
	deleteAttributeValue?:AttributeValue,
	createCopy?:Copy,
	updateCopy?:Copy,
	updateOrCreateCopy?:Copy,
	deleteCopy?:Copy,
	createCopyVariant?:CopyVariant,
	updateCopyVariant?:CopyVariant,
	updateOrCreateCopyVariant?:CopyVariant,
	deleteCopyVariant?:CopyVariant,
	createCopyAttribute?:CopyAttribute,
	updateCopyAttribute?:CopyAttribute,
	updateOrCreateCopyAttribute?:CopyAttribute,
	deleteCopyAttribute?:CopyAttribute,
	authenticate?:JWTType,
	refreshAnonymousUser?:JWTType
}

export type Organisation = {
	__typename?: "Organisation",
	id?:number,
	name?:string,
	entity?:Entity,
	memberships?:(Membership | undefined)[],
	jwtTypesByOrganisation?:(JWTType | undefined)[]
}

export type OrganisationCreateInput = {
		id?:number,
	name?:string,
	entity?:number,
	memberships?:OrganisationMembershipsInput,
	jwtTypesByOrganisation?:OrganisationJwtTypesByOrganisationInput
}

export type OrganisationDeleteInput = {
		id?:number
}

export type OrganisationEntityReverseInput = {
		id?:number,
	name?:string,
	memberships?:OrganisationMembershipsInput,
	jwtTypesByOrganisation?:OrganisationJwtTypesByOrganisationInput
}

export type OrganisationJwtTypesByOrganisationInput = {
		create?:(JWTTypeOrganisationReverseInput | undefined)[],
	delete?:(DeleteByIDInput | undefined)[]
}

export type OrganisationMembershipsInput = {
		create?:(MembershipOrganisationReverseInput | undefined)[],
	delete?:(DeleteByIDInput | undefined)[]
}

export type OrganisationUpdateInput = {
		name?:string,
	entity?:number,
	memberships?:OrganisationMembershipsInput,
	jwtTypesByOrganisation?:OrganisationJwtTypesByOrganisationInput
}

export type Query = {
	__typename?: "Query",
	allEntitys?:(Entity | undefined)[],
	getEntity?:Entity,
	allUsers?:(User | undefined)[],
	getUser?:User,
	getUserByEmail?:User,
	allOrganisations?:(Organisation | undefined)[],
	getOrganisation?:Organisation,
	allMemberships?:(Membership | undefined)[],
	getMembership?:Membership,
	allAPITokens?:(APIToken | undefined)[],
	getAPIToken?:APIToken,
	allAttributes?:(Attribute | undefined)[],
	getAttribute?:Attribute,
	allAttributeValues?:(AttributeValue | undefined)[],
	getAttributeValue?:AttributeValue,
	allCopies?:(Copy | undefined)[],
	getCopy?:Copy,
	allCopyVariants?:(CopyVariant | undefined)[],
	getCopyVariant?:CopyVariant,
	allCopyAttributes?:(CopyAttribute | undefined)[],
	getCopyAttribute?:CopyAttribute,
	matchCopy?:Copy,
	copyTable?:CopyTableType
}

export type RefreshAnonymousUserInput = {
		token?:string
}

export type User = {
	__typename?: "User",
	id?:number,
	name?:string,
	email?:string,
	created?:Datetime,
	anonymous?:boolean,
	entity?:Entity,
	memberships?:(Membership | undefined)[],
	jwtTypesByUser?:(JWTType | undefined)[]
}

export type UserCreateInput = {
		id?:number,
	name?:string,
	email?:string,
	created?:Datetime,
	anonymous?:boolean,
	entity?:number,
	memberships?:UserMembershipsInput,
	jwtTypesByUser?:UserJwtTypesByUserInput
}

export type UserDeleteInput = {
		id?:number
}

export type UserEntityReverseInput = {
		id?:number,
	name?:string,
	email?:string,
	password?:string,
	loggedOut?:Datetime,
	created?:Datetime,
	anonymous?:boolean,
	memberships?:UserMembershipsInput,
	jwtTypesByUser?:UserJwtTypesByUserInput
}

export type UserJwtTypesByUserInput = {
		create?:(JWTTypeUserReverseInput | undefined)[],
	delete?:(DeleteByIDInput | undefined)[]
}

export type UserMembershipsInput = {
		create?:(MembershipUserReverseInput | undefined)[],
	delete?:(DeleteByIDInput | undefined)[]
}

export type UserUpdateInput = {
		name?:string,
	email?:string,
	created?:Datetime,
	anonymous?:boolean,
	entity?:number,
	memberships?:UserMembershipsInput,
	jwtTypesByUser?:UserJwtTypesByUserInput
}

/** The `UUID` scalar type represents a UUID. */
export type UUID = any

export const AllTypesProps: Record<string,any> = {
	APITokenCreateInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		purpose:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	APITokenDeleteInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	APITokenUpdateInput:{
		purpose:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	AttributeAttributeValuesByKeyInput:{
		create:{
			type:"AttributeValueKeyReverseInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		delete:{
			type:"DeleteByIDInput",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	AttributeCreateInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		key:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		owner:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		attributeValuesByKey:{
			type:"AttributeAttributeValuesByKeyInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	AttributeDeleteInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	AttributeOwnerReverseInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		key:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		attributeValuesByKey:{
			type:"AttributeAttributeValuesByKeyInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	AttributeUpdateInput:{
		key:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		owner:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		attributeValuesByKey:{
			type:"AttributeAttributeValuesByKeyInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	AttributeValueCopyAttributesByValueInput:{
		create:{
			type:"CopyAttributeValueReverseInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		delete:{
			type:"DeleteByIDInput",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	AttributeValueCreateInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		key:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		value:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		copyAttributesByValue:{
			type:"AttributeValueCopyAttributesByValueInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	AttributeValueDeleteInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	AttributeValueKeyReverseInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		value:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		copyAttributesByValue:{
			type:"AttributeValueCopyAttributesByValueInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	AttributeValueUpdateInput:{
		key:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		value:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		copyAttributesByValue:{
			type:"AttributeValueCopyAttributesByValueInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	AuthenticateInput:{
		email:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		password:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CopyAttributeCreateInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		variant:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		value:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CopyAttributeDeleteInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CopyAttributeUpdateInput:{
		variant:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		value:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CopyAttributeValueReverseInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		variant:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CopyAttributeVariantReverseInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		value:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CopyCopyVariantsByCopyInput:{
		create:{
			type:"CopyVariantCopyReverseInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		delete:{
			type:"DeleteByIDInput",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	CopyCreateInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		key:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		owner:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		copyVariantsByCopy:{
			type:"CopyCopyVariantsByCopyInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CopyDeleteInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CopyOwnerReverseInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		key:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		copyVariantsByCopy:{
			type:"CopyCopyVariantsByCopyInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CopyUpdateInput:{
		key:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		owner:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		copyVariantsByCopy:{
			type:"CopyCopyVariantsByCopyInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CopyVariantCopyAttributesByVariantInput:{
		create:{
			type:"CopyAttributeVariantReverseInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		delete:{
			type:"DeleteByIDInput",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	CopyVariantCopyReverseInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		text:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		copyAttributesByVariant:{
			type:"CopyVariantCopyAttributesByVariantInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CopyVariantCreateInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		copy:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		text:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		copyAttributesByVariant:{
			type:"CopyVariantCopyAttributesByVariantInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CopyVariantDeleteInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CopyVariantUpdateInput:{
		copy:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		text:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		copyAttributesByVariant:{
			type:"CopyVariantCopyAttributesByVariantInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	Datetime: "String",
	DeleteByIDInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	EntityAttributesByOwnerInput:{
		create:{
			type:"AttributeOwnerReverseInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		delete:{
			type:"DeleteByIDInput",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	EntityCopiesByOwnerInput:{
		create:{
			type:"CopyOwnerReverseInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		delete:{
			type:"DeleteByIDInput",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	EntityCreateInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		users:{
			type:"EntityUsersInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		organisations:{
			type:"EntityOrganisationsInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		attributesByOwner:{
			type:"EntityAttributesByOwnerInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		copiesByOwner:{
			type:"EntityCopiesByOwnerInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	EntityDeleteInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	EntityOrganisationsInput:{
		create:{
			type:"OrganisationEntityReverseInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		delete:{
			type:"DeleteByIDInput",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	EntityUpdateInput:{
		users:{
			type:"EntityUsersInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		organisations:{
			type:"EntityOrganisationsInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		attributesByOwner:{
			type:"EntityAttributesByOwnerInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		copiesByOwner:{
			type:"EntityCopiesByOwnerInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	EntityUsersInput:{
		create:{
			type:"UserEntityReverseInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		delete:{
			type:"DeleteByIDInput",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	JSON: "String",
	JWTTypeOrganisationReverseInput:{
		token:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		user:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	JWTTypeUserReverseInput:{
		token:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		organisation:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	MembershipCreateInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		user:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		organisation:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		role:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		active:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	MembershipDeleteInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	MembershipOrganisationReverseInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		user:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		role:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		active:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	MembershipUpdateInput:{
		user:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		organisation:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		role:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		active:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	MembershipUserReverseInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		organisation:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		role:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		active:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	Mutation:{
		createEntity:{
			input:{
				type:"EntityCreateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateEntity:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			},
			input:{
				type:"EntityUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateOrCreateEntity:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			input:{
				type:"EntityUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		deleteEntity:{
			input:{
				type:"EntityDeleteInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createUser:{
			input:{
				type:"UserCreateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateUser:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			},
			input:{
				type:"UserUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateOrCreateUser:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			input:{
				type:"UserUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		deleteUser:{
			input:{
				type:"UserDeleteInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createOrganisation:{
			input:{
				type:"OrganisationCreateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateOrganisation:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			},
			input:{
				type:"OrganisationUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateOrCreateOrganisation:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			input:{
				type:"OrganisationUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		deleteOrganisation:{
			input:{
				type:"OrganisationDeleteInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createMembership:{
			input:{
				type:"MembershipCreateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateMembership:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			},
			input:{
				type:"MembershipUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateOrCreateMembership:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			input:{
				type:"MembershipUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		deleteMembership:{
			input:{
				type:"MembershipDeleteInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createAPIToken:{
			input:{
				type:"APITokenCreateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateAPIToken:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			},
			input:{
				type:"APITokenUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateOrCreateAPIToken:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			input:{
				type:"APITokenUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		deleteAPIToken:{
			input:{
				type:"APITokenDeleteInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createAttribute:{
			input:{
				type:"AttributeCreateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateAttribute:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			},
			input:{
				type:"AttributeUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateOrCreateAttribute:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			input:{
				type:"AttributeUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		deleteAttribute:{
			input:{
				type:"AttributeDeleteInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createAttributeValue:{
			input:{
				type:"AttributeValueCreateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateAttributeValue:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			},
			input:{
				type:"AttributeValueUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateOrCreateAttributeValue:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			input:{
				type:"AttributeValueUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		deleteAttributeValue:{
			input:{
				type:"AttributeValueDeleteInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createCopy:{
			input:{
				type:"CopyCreateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateCopy:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			},
			input:{
				type:"CopyUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateOrCreateCopy:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			input:{
				type:"CopyUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		deleteCopy:{
			input:{
				type:"CopyDeleteInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createCopyVariant:{
			input:{
				type:"CopyVariantCreateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateCopyVariant:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			},
			input:{
				type:"CopyVariantUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateOrCreateCopyVariant:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			input:{
				type:"CopyVariantUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		deleteCopyVariant:{
			input:{
				type:"CopyVariantDeleteInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createCopyAttribute:{
			input:{
				type:"CopyAttributeCreateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateCopyAttribute:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			},
			input:{
				type:"CopyAttributeUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateOrCreateCopyAttribute:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			input:{
				type:"CopyAttributeUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		deleteCopyAttribute:{
			input:{
				type:"CopyAttributeDeleteInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		authenticate:{
			input:{
				type:"AuthenticateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		refreshAnonymousUser:{
			input:{
				type:"RefreshAnonymousUserInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	OrganisationCreateInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		entity:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		memberships:{
			type:"OrganisationMembershipsInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		jwtTypesByOrganisation:{
			type:"OrganisationJwtTypesByOrganisationInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	OrganisationDeleteInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	OrganisationEntityReverseInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		memberships:{
			type:"OrganisationMembershipsInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		jwtTypesByOrganisation:{
			type:"OrganisationJwtTypesByOrganisationInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	OrganisationJwtTypesByOrganisationInput:{
		create:{
			type:"JWTTypeOrganisationReverseInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		delete:{
			type:"DeleteByIDInput",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	OrganisationMembershipsInput:{
		create:{
			type:"MembershipOrganisationReverseInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		delete:{
			type:"DeleteByIDInput",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	OrganisationUpdateInput:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		entity:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		memberships:{
			type:"OrganisationMembershipsInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		jwtTypesByOrganisation:{
			type:"OrganisationJwtTypesByOrganisationInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	Query:{
		getEntity:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getUser:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getUserByEmail:{
			email:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getOrganisation:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getMembership:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getAPIToken:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getAttribute:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getAttributeValue:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getCopy:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getCopyVariant:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getCopyAttribute:{
			id:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		matchCopy:{
			attributes:{
				type:"JSON",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	RefreshAnonymousUserInput:{
		token:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UserCreateInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		created:{
			type:"Datetime",
			array:false,
			arrayRequired:false,
			required:false
		},
		anonymous:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		entity:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		memberships:{
			type:"UserMembershipsInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		jwtTypesByUser:{
			type:"UserJwtTypesByUserInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UserDeleteInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UserEntityReverseInput:{
		id:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		password:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		loggedOut:{
			type:"Datetime",
			array:false,
			arrayRequired:false,
			required:false
		},
		created:{
			type:"Datetime",
			array:false,
			arrayRequired:false,
			required:false
		},
		anonymous:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		memberships:{
			type:"UserMembershipsInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		jwtTypesByUser:{
			type:"UserJwtTypesByUserInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UserJwtTypesByUserInput:{
		create:{
			type:"JWTTypeUserReverseInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		delete:{
			type:"DeleteByIDInput",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	UserMembershipsInput:{
		create:{
			type:"MembershipUserReverseInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		delete:{
			type:"DeleteByIDInput",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	UserUpdateInput:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		created:{
			type:"Datetime",
			array:false,
			arrayRequired:false,
			required:false
		},
		anonymous:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		entity:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		memberships:{
			type:"UserMembershipsInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		jwtTypesByUser:{
			type:"UserJwtTypesByUserInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UUID: "String"
}

export const ReturnTypes: Record<string,any> = {
	APIToken:{
		id:"Int",
		purpose:"String"
	},
	Attribute:{
		id:"Int",
		key:"String",
		description:"String",
		owner:"Entity",
		attributeValuesByKey:"AttributeValue"
	},
	AttributeValue:{
		id:"Int",
		key:"Attribute",
		value:"String",
		description:"String",
		copyAttributesByValue:"CopyAttribute"
	},
	Copy:{
		id:"Int",
		key:"String",
		description:"String",
		owner:"Entity",
		copyVariantsByCopy:"CopyVariant"
	},
	CopyAttribute:{
		id:"Int",
		variant:"CopyVariant",
		value:"AttributeValue"
	},
	CopyTableType:{
		table:"String"
	},
	CopyVariant:{
		id:"Int",
		copy:"Copy",
		text:"String",
		copyAttributesByVariant:"CopyAttribute"
	},
	Entity:{
		id:"Int",
		users:"User",
		organisations:"Organisation",
		attributesByOwner:"Attribute",
		copiesByOwner:"Copy"
	},
	JWTType:{
		token:"String",
		user:"User",
		organisation:"Organisation"
	},
	Membership:{
		id:"Int",
		user:"User",
		organisation:"Organisation",
		role:"String",
		active:"Boolean"
	},
	Mutation:{
		createEntity:"Entity",
		updateEntity:"Entity",
		updateOrCreateEntity:"Entity",
		deleteEntity:"Entity",
		createUser:"User",
		updateUser:"User",
		updateOrCreateUser:"User",
		deleteUser:"User",
		createOrganisation:"Organisation",
		updateOrganisation:"Organisation",
		updateOrCreateOrganisation:"Organisation",
		deleteOrganisation:"Organisation",
		createMembership:"Membership",
		updateMembership:"Membership",
		updateOrCreateMembership:"Membership",
		deleteMembership:"Membership",
		createAPIToken:"APIToken",
		updateAPIToken:"APIToken",
		updateOrCreateAPIToken:"APIToken",
		deleteAPIToken:"APIToken",
		createAttribute:"Attribute",
		updateAttribute:"Attribute",
		updateOrCreateAttribute:"Attribute",
		deleteAttribute:"Attribute",
		createAttributeValue:"AttributeValue",
		updateAttributeValue:"AttributeValue",
		updateOrCreateAttributeValue:"AttributeValue",
		deleteAttributeValue:"AttributeValue",
		createCopy:"Copy",
		updateCopy:"Copy",
		updateOrCreateCopy:"Copy",
		deleteCopy:"Copy",
		createCopyVariant:"CopyVariant",
		updateCopyVariant:"CopyVariant",
		updateOrCreateCopyVariant:"CopyVariant",
		deleteCopyVariant:"CopyVariant",
		createCopyAttribute:"CopyAttribute",
		updateCopyAttribute:"CopyAttribute",
		updateOrCreateCopyAttribute:"CopyAttribute",
		deleteCopyAttribute:"CopyAttribute",
		authenticate:"JWTType",
		refreshAnonymousUser:"JWTType"
	},
	Organisation:{
		id:"Int",
		name:"String",
		entity:"Entity",
		memberships:"Membership",
		jwtTypesByOrganisation:"JWTType"
	},
	Query:{
		allEntitys:"Entity",
		getEntity:"Entity",
		allUsers:"User",
		getUser:"User",
		getUserByEmail:"User",
		allOrganisations:"Organisation",
		getOrganisation:"Organisation",
		allMemberships:"Membership",
		getMembership:"Membership",
		allAPITokens:"APIToken",
		getAPIToken:"APIToken",
		allAttributes:"Attribute",
		getAttribute:"Attribute",
		allAttributeValues:"AttributeValue",
		getAttributeValue:"AttributeValue",
		allCopies:"Copy",
		getCopy:"Copy",
		allCopyVariants:"CopyVariant",
		getCopyVariant:"CopyVariant",
		allCopyAttributes:"CopyAttribute",
		getCopyAttribute:"CopyAttribute",
		matchCopy:"Copy",
		copyTable:"CopyTableType"
	},
	User:{
		id:"Int",
		name:"String",
		email:"String",
		created:"Datetime",
		anonymous:"Boolean",
		entity:"Entity",
		memberships:"Membership",
		jwtTypesByUser:"JWTType"
	}
}

export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

type NotUndefined<T> = T extends undefined ? never : T;

export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
export type MapInterface<SRC, DST> = SRC extends {
  __interface: infer INTERFACE;
  __resolve: infer IMPLEMENTORS;
}
  ? ObjectToUnion<
      Omit<
        {
          [Key in keyof Omit<DST, keyof INTERFACE | '__typename'>]: Key extends keyof IMPLEMENTORS
            ? MapType<IMPLEMENTORS[Key], DST[Key]> &
                Omit<
                  {
                    [Key in keyof Omit<
                      DST,
                      keyof IMPLEMENTORS | '__typename'
                    >]: Key extends keyof INTERFACE
                      ? LastMapTypeSRCResolver<INTERFACE[Key], DST[Key]>
                      : never;
                  },
                  keyof IMPLEMENTORS
                > &
                (DST extends { __typename: any }
                  ? MapType<IMPLEMENTORS[Key], { __typename: true }>
                  : {})
            : never;
        },
        keyof INTERFACE | '__typename'
      >
    >
  : never;

export type ValueToUnion<T> = T extends {
  __typename: infer R;
}
  ? {
      [P in keyof Omit<T, '__typename'>]: T[P] & {
        __typename: R;
      };
    }
  : T;

export type ObjectToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

type Anify<T> = { [P in keyof T]?: any };


type LastMapTypeSRCResolver<SRC, DST> = SRC extends undefined
  ? undefined
  : SRC extends Array<infer AR>
  ? LastMapTypeSRCResolver<AR, DST>[]
  : SRC extends { __interface: any; __resolve: any }
  ? MapInterface<SRC, DST>
  : SRC extends { __union: any; __resolve: infer RESOLVE }
  ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
  : DST extends boolean
  ? SRC
  : MapType<SRC, DST>;

type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
  ? SRC
  : DST extends {
      __alias: any;
    }
  ? {
      [A in keyof DST["__alias"]]: Required<SRC> extends Anify<
        DST["__alias"][A]
      >
        ? MapType<Required<SRC>, DST["__alias"][A]>
        : never;
    } &
      {
        [Key in keyof Omit<DST, "__alias">]: DST[Key] extends [
          any,
          infer PAYLOAD
        ]
          ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
          : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
      }
  : {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    };

type OperationToGraphQL<V, T> = <Z>(o: Z | V) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;
export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `"${value.replace(/"/g, '\\\"')}"`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};

export const TypesPropsResolver = ({
  value,
  type,
  name,
  key,
  blockArrays
}: {
  value: any;
  type: string;
  name: string;
  key?: string;
  blockArrays?: boolean;
}): string => {
  if (value === null) {
    return `null`;
  }
  let resolvedValue = AllTypesProps[type][name];
  if (key) {
    resolvedValue = resolvedValue[key];
  }
  if (!resolvedValue) {
    throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
  }
  const typeResolved = resolvedValue.type;
  const isArray: boolean = resolvedValue.array;
  if (isArray && !blockArrays) {
    return `[${value
      .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
      .join(',')}]`;
  }
  const reslovedScalar = ScalarResolver(typeResolved, value);
  if (!reslovedScalar) {
    const resolvedType = AllTypesProps[typeResolved];
    if (typeof resolvedType === 'object') {
      const argsKeys = Object.keys(resolvedType);
      return `{${argsKeys
        .filter((ak) => value[ak] !== undefined)
        .map(
          (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
        )}}`;
    }
    return ScalarResolver(AllTypesProps[typeResolved], value) as string;
  }
  return reslovedScalar;
};

const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values);

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};

const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;

const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;

const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a).map((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).map((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};

const buildQuery = (type: string, a?: Record<any, any>) =>
  traverseToSeekArrays([type], a)

const queryConstruct = (t: 'Query' | 'Mutation' | 'Subscription') => (o: Record<any, any>) => `${t.toLowerCase()}${buildQuery(t, o)}`;

const fullChainConstruct = (options: fetchOptions) => (t: 'Query' | 'Mutation' | 'Subscription') => (o: Record<any, any>) =>
  apiFetch(options, queryConstruct(t)(o));

const seekForAliases = (o: any) => {
  if (typeof o === 'object' && o) {
    const keys = Object.keys(o);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = o[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        o[alias] = {
          [operation]: value
        };
        delete o[k];
      } else {
        if (Array.isArray(value)) {
          value.forEach(seekForAliases);
        } else {
          if (typeof value === 'object') {
            seekForAliases(value);
          }
        }
      }
    });
  }
};


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((resolve, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

const apiFetch = (options: fetchOptions, query: string) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          seekForAliases(response.data);
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        seekForAliases(response.data);
        return response.data;
      });
  };
  


export const Chain = (...options: fetchOptions) => ({
  Query: ((o: any) =>
    fullChainConstruct(options)('Query')(o).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Query"],Query>,
Mutation: ((o: any) =>
    fullChainConstruct(options)('Mutation')(o).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Mutation"],Mutation>
});
export const Zeus = {
  Query: (o:ValueTypes["Query"]) => queryConstruct('Query')(o),
Mutation: (o:ValueTypes["Mutation"]) => queryConstruct('Mutation')(o)
};
export const Cast = {
  Query: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["Query"],
  Query
>,
Mutation: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["Mutation"],
  Mutation
>
};
export const Selectors = {
  Query: ZeusSelect<ValueTypes["Query"]>(),
Mutation: ZeusSelect<ValueTypes["Mutation"]>()
};
  

export const Gql = Chain('http://localhost:8000/graphql/')