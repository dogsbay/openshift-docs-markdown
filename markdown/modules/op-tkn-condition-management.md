# Condition management commands {id="op-tkn-condition-management_{{ context }}"}

## condition {id="_condition"}
Manage Conditions.

```terminal title="Example: Display help"
$ tkn condition --help
```

## condition delete {id="_condition_delete"}
Delete a Condition.

```terminal title="Example: Delete the mycondition1 Condition from a namespace"
$ tkn condition delete mycondition1 -n myspace
```

## condition describe {id="_condition_describe"}
Describe a Condition.

```terminal title="Example: Describe the mycondition1 Condition in a namespace"
$ tkn condition describe mycondition1 -n myspace
```

## condition list {id="_condition_list"}
List Conditions.

```terminal title="Example: List Conditions in a namespace"
$ tkn condition list -n myspace
```