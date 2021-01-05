/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.dvdmanager.data;

import com.mycompany.dvdmanager.models.DvD;
import java.util.List;

/**
 *
 * @author nacer
 */
public interface DvDDao {
    // get DVD by ID
    DvD findById(int id);
    
    // Get all DVD
    List<DvD> getAll();
    
    // Get dvd by title
    List<DvD> findByTitle(String title);
    
    // get dvd by release year
    List<DvD> findByReleaseYear(int ry);
    
    // get dvd by director name
    List<DvD> findByDirectorName(String dn);
    
    // get dvd by rating
    List<DvD> findByRating(String rating);
    
    // create a dvd
    DvD add(DvD dvd);
    
    // update a dvd
    boolean update(DvD dvd);
    
    // delete a dvd by id
    boolean deleteById(int id);
    
}
