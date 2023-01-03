# node_modules_rmrf
rm -rf specified dir's all node_modules, including all sub directory's node_modules recursively


## cmd
```
node_modules_rmrf
```

## usage

```
.
 |-parent
 | |-chdir1
 | | |-node_modules
 | | |-file1.txt
 | |-chdir2
 | | |-node_modules
 | | |-file2.txt
 | | |-file3.sh
```

=>

```
.
 |-parent
 | |-chdir1
 | | |-file1.txt
 | |-chdir2
 | | |-file2.txt
 | | |-file3.sh
```