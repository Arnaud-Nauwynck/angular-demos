

# ng-bootstrap dropdown not working? 

in package.json:
```
    "@ng-bootstrap/ng-bootstrap": "^15.1.0",
    "@popperjs/core": "^2.11.8",
    "bootstrap": "^5.3.0",
```


using bootstrap5 => useless ..
```
  "./node_modules/@popperjs/core/dist/umd/popper.min.js",
  "./node_modules/bootstrap/dist/js/bootstrap.min.js"
```

possible cause: do not use (vanilla bootsrap) data-toggle="collapse"
```
legacy vanilly bootstrap: 
  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
```
=> replace by ng-bootsrap ngbDropdown + ngbDropdownToggle + ngbDropdownMenu ..
example:
```
    <li ngbDropdown class="nav-item">
      <a ngbDropdownToggle id="navbarMenu1" class="nav-link" role="button">
        Menu1
      </a>
      <div ngbDropdownMenu aria-labelledby="navbarMenu1" class="dropdown-menu" >
    </li>
```
